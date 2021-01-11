<template>
  <section class="products">
    <!-- Form Code -->
    <b-container>
      <b-row>
        <b-button class="create_btn" @click="$router.go(-1)"> Back </b-button>
      </b-row>
      
      <div class="main_form">
        <h3 class="text-center">{{ save ? "Create" : "Update" }} Product</h3>
        <b-row>
          <b-col>
            <b-form id="form">
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Name" label-for="input-1">
                    <b-form-input
                      id="input-1"
                      type="text"
                      v-model="form.name"
                      placeholder="Product name"
                      autocomplete="off"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <!-- Single Input -->
              <!-- Single Input -->
              <b-row>
                <b-col>
                  <b-form-group label="Product Description" label-for="input-2">
                    <b-form-textarea
                      id="input-2"
                      type="text"
                      v-model="form.description"
                      placeholder="Product description"
                      no-resize
                      autocomplete="off"
                    ></b-form-textarea>
                  </b-form-group>
                </b-col>
              </b-row>

              <b-row>
                <b-col>
                  <b-form-group>
                    <div class="imges">
                      <template v-if="images.length">
                        <div class="img" v-for="(img, i) in images" :key="i">
                          <img :src="img" alt="" />
                        </div>
                      </template>
                      <div class="icon" @click="onFilePicked">
                        <span>
                          <svg
                            width="74"
                            height="74"
                            viewBox="0 0 74 74"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M67.0625 60.125H6.9375C6.32419 60.125 5.73599 59.8814 5.30232 59.4477C4.86864 59.014 4.625 58.4258 4.625 57.8125V18.5C4.625 17.8867 4.86864 17.2985 5.30232 16.8648C5.73599 16.4311 6.32419 16.1875 6.9375 16.1875H21.8762L25.8306 10.2906C26.0401 9.97252 26.3249 9.71108 26.6598 9.52953C26.9946 9.34799 27.3691 9.25197 27.75 9.25H46.25C46.6309 9.25197 47.0054 9.34799 47.3402 9.52953C47.6751 9.71108 47.9599 9.97252 48.1694 10.2906L52.1238 16.1875H67.0625C67.6758 16.1875 68.264 16.4311 68.6977 16.8648C69.1314 17.2985 69.375 17.8867 69.375 18.5V57.8125C69.375 58.4258 69.1314 59.014 68.6977 59.4477C68.264 59.8814 67.6758 60.125 67.0625 60.125ZM9.25 55.5H64.75V20.8125H50.875C50.4941 20.8105 50.1196 20.7145 49.7848 20.533C49.4499 20.3514 49.1651 20.09 48.9556 19.7719L45.0012 13.875H28.9988L25.0444 19.7719C24.8349 20.09 24.5501 20.3514 24.2152 20.533C23.8804 20.7145 23.5059 20.8105 23.125 20.8125H9.25V55.5Z"
                              fill="black"
                            />
                            <path
                              d="M37 50.875C34.2558 50.875 31.5732 50.0612 29.2915 48.5366C27.0097 47.012 25.2313 44.8451 24.1812 42.3097C23.131 39.7744 22.8562 36.9846 23.3916 34.2931C23.927 31.6016 25.2484 29.1294 27.1889 27.1889C29.1293 25.2484 31.6016 23.927 34.2931 23.3916C36.9846 22.8562 39.7744 23.131 42.3097 24.1812C44.8451 25.2313 47.012 27.0097 48.5366 29.2915C50.0612 31.5732 50.875 34.2558 50.875 37C50.875 40.6799 49.4132 44.209 46.8111 46.8111C44.209 49.4132 40.6799 50.875 37 50.875ZM37 27.75C35.1705 27.75 33.3821 28.2925 31.861 29.3089C30.3398 30.3253 29.1542 31.77 28.4541 33.4602C27.754 35.1504 27.5708 37.0103 27.9277 38.8046C28.2847 40.5989 29.1656 42.2471 30.4593 43.5407C31.7529 44.8344 33.4011 45.7154 35.1954 46.0723C36.9897 46.4292 38.8496 46.246 40.5398 45.5459C42.23 44.8458 43.6747 43.6602 44.6911 42.139C45.7075 40.6179 46.25 38.8295 46.25 37C46.25 34.5468 45.2754 32.194 43.5407 30.4593C41.806 28.7246 39.4533 27.75 37 27.75Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                      </div>
                      <input
                        type="file"
                        id="imgFile"
                        class="input-control"
                        style="display: none"
                        ref="fileInput"
                        accept="image/png, image/jpeg, image/bmp"
                        @change="imgPicked"
                      />
                    </div>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-button
                    v-if="save"
                    type="submit"
                    class="save_btn"
                    @click.prevent="saveForm"
                    >Save</b-button
                  >
                  <b-button
                    v-else
                    type="submit"
                    class="save_btn"
                    @click.prevent="updateP"
                    >Update</b-button
                  >
                </b-col>
              </b-row>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </b-container>
    <!-- Form Code -->
  </section>
</template>

<script>
import { db } from "@/firebase.js";
export default {
  data() {
    return {
      save: true,
      images: [],
      img2: "",
      editId:null,
      form: {
        name: "",
        description: "",
        img: '',
      },
    };
  },

  methods: {
    saveForm() {
      this.form.img = this.images[0];
      db.collection('products').add(this.form)
      .then(()=>{
        alert("Successfull Created")
        this.form.name = '';
        this.form.description = '';
        this.form.img = '';
        this.$router.push({ name: "List" }, { path: "/list" });
      })
      .catch(err=>{
          console.log(err);
          console.log("Error Here");
      })
    },
    onFilePicked() {
      this.$refs.fileInput.click();
    },
    imgPicked(event) {
      const files = event.target.files;
      let fileName = files[0].name;
      if (fileName.lastIndexOf(".") <= 0) {
        return alert("please add a valid file");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.img2 = fileReader.result;
        this.images.push(this.img2);
      });
      fileReader.readAsDataURL(files[0]);
    },
    updateP(){
    db.collection('products').doc(this.$route.params.id)
    .update(this.form)
    .then(()=>{
        console.log("Document Updated");
        this.$router.push({ name: "List" }, { path: "/list" });
    })
    .catch(err=>{
        console.log(err);
    })
    
    },
  },
   created(){
      
    
        let editPath = db.collection("products").doc(this.$route.params.id);
        editPath.get()
        .then(doc=>{
            if(this.$route.params.id == doc.id){
              console.log("Edit True");
              this.save = false;
              this.form = doc.data();
              this.form.img = require("@/assets/products/1.jpg");
            }
            else{
                console.log("Edit False");
                this.save = true;
                return;
            }
            
        })
        .catch(err=>{
            console.log(err);
        })
       }
       
    

};
</script>

<style scoped>
.main_form {
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  padding-top: 30px;
  font-family: "Open Sans", sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding-bottom: 20px;
}
.main_form form {
  max-width: 90%;
  margin: auto;
}
.main_form h3 {
  margin-bottom: 40px;
}

.save_btn,
.store_btn {
  background-color: #38485f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto;
  width: 100%;
  max-width: 150px;
  height: 40px;
  background: #38485f;
  border-radius: 37.5px;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
}
.store_btn {
  margin-top: 10px;
  width: 100%;
  max-width: 100px;
  height: 30px;
  margin-left: 0px;
  transform: translateY(-10px);
  font-size: 16px;
  font-weight: normal;
}
.imges {
  display: grid;
  grid-template-columns: repeat(auto-fit, 100px);
  column-gap: 10px;
  row-gap: 10px;
  width: 100%;
}
.img {
  width: 100px;
  height: 100px;
  border: 1px dashed #000;
}
.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px dashed #000;
  height: 100px;
  cursor: pointer;
}
.custom-radio {
  text-align: left;
  font-size: 16px;
}
#p_label,
#s_label {
  text-align: left;
  font-size: 12px;
}
.create_btn {
  max-width: 100px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #38485f;
  color: #fff;
  text-transform: capitalize;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #ffffff;
  margin: 20px 15px;
}
</style>
