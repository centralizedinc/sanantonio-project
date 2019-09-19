<template>
  <a-row type="flex" :gutter="24" justify="center">
    <a-col :span="18">
      <a-card>
        <h3>Check the status of your application:</h3>
        <a-input-search
          size="large"
          placeholder="Enter Application Reference Number"
          @search="onSearch"
          v-model="serching"
        ></a-input-search>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar
              shape="square"
              :size="80"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="shop" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
            <h3>Apply for Mayor's Permit (Business Permit)</h3>
            <a-divider style="margin-top:-1vh"></a-divider>
            <p>Business licenses are permits issued by government agencies that allow individuals or companies to conduct business within the government's geographical jurisdiction.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar
              shape="square"
              :size="80"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="snippets" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
            <h3>Apply for Occupancy Permit</h3>
            <a-divider style="margin-top:-1vh"></a-divider>
            <p>An Occupancy Permit is a document issued by Department of Building Official that serves as a proof that the structure built completed all the building work and suitable for occupation.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar
              shape="square"
              :size="80"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="tool" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
            <h3>Apply for Building Permit</h3>
            <a-divider style="margin-top:-1vh"></a-divider>
            <p>A Building Permit is a document issued by the Building Official to an. owner/applicant to proceed with the construction, installation, addition, alteration, renovation, conversion, repair, moving, demolition or other work.</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>

    <a-col :span="18" style="margin-top:2vh">
      <a-card data-aos="fade-up">
        <a-row type="flex" align="middle" justify="center">
          <a-col :span="4">
            <a-avatar
              shape="square"
              :size="80"
              class="card_btn"
              @click="redirect('business-permit')"
            >
              <a-icon type="exception" style="font-size:36px"></a-icon>
            </a-avatar>
          </a-col>
          <a-col :span="18">
            <h3>Apply for Sanitary Permit</h3>
            <a-divider style="margin-top:-1vh"></a-divider>
            <p>Food and Non-food business establishments are required to secure sanitary permit to make sure they observe the standard of the Sanitary Code of the Philippines</p>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
    <a-modal v-model="visible" v-show="visible" data-backdrop="static" data-keyboard="false">
      <template slot="footer">
        <a-button>
          <a-icon type="download" />Download
        </a-button>
        <!-- <a-button @click="confirm()">Confirm</a-button> -->
      </template>
      <div align="center">
        <h3>Application Reference Number: {{transac.reference_no}}</h3>
        <h3>Permit Type: {{transac.permit_type}}</h3>
        <h3>Status: {{transac.status}}</h3>
      </div>
    </a-modal>
  </a-row>
</template>

<script>
export default {
  data() {
    return {
      transac: {
        reference_no: "",
        permit_type: "",
        status: "",
        task: ""
      },
      store_holder: [],
      visible: false,
      serching: ""
    };
  },
  created() {
    this.store_holder = this.$store.state.permit.permit;
  },
  // watch: {
  //   visible() {
  //     console.log("visible status: " + JSON.stringify(this.visible));
  //     this.serching = "";
  //     if (this.visible) {
  //       this.visible = false;
  //     }

  //     // this.transac.splice(0, this.transac.length);
  //   }
  // },
  methods: {
    onSearch(value) {
      console.log("on search data value: " + JSON.stringify(value));
      console.log(
        "on search data store_holder: " + JSON.stringify(this.store_holder)
      );
      this.store_holder.forEach(element => {
        console.log("element data: " + JSON.stringify(element));
        console.log("value data: " + JSON.stringify(value));
        if (element.reference_no === value) {
          console.log("element meron: " + JSON.stringify(element));
          this.transac = {
            reference_no: "",
            permit_type: "",
            status: "",
            task: ""
          };
          this.transac.reference_no = element.reference_no;
          this.transac.permit_type = element.application.permit_type;
          this.transac.status = element.progress.status;
          this.transac.task = element.progress.current_task;
          // this.transac = element;
          this.visible = true;
        } else {
          this.$notification["info"]({
            message: "Permit Not Found",
            description: "Sorry we can not find your permit"
          });
        }
      });
    },
    redirect(nav) {
      this.$emit("redirect", nav);
    }
  }
};
</script>

<style>
</style>