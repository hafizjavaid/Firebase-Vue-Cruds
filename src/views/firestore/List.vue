<template>
  <section class="products">
    <b-container>
      <b-row>
        <b-button class="create_btn" @click="create"> create Product </b-button>
      </b-row>
      <b-row class="mt-5">
        <b-col
          md="4"
          sm="6"
          lg="3"
          cols="12"
          v-for="(product, i) in Products"
          :key="i"
          class="s_product_col"
        >
          <div class="s_product">
            <div class="product_img">
              <img :src="product.img" alt="" />
            </div>
            <div class="product_content">
              <h4>{{ product.name }}</h4>
              <h6>{{ product.description }}</h6>
              <div class="btns">
                <div class="btn" @click="update(product)">Update</div>
                <div class="btn" @click="delProduct(product.id)">Delete</div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-modal id="modal-1" @ok="handleOk">
      <p>Are you sure</p>
    </b-modal>
  </section>
</template>

<script>
import { db } from "@/firebase.js";
export default {
  data() {
    return {
      Products: [],
      delete: false,
      deleteId: -1,
    };
  },
  created() {
    //   ====================== Getting List From Firestore =============================
    db.collection("products").onSnapshot((snapShotChange) => {
      this.Products = [];
      snapShotChange.forEach((doc) => {
        
        this.Products.push({
          id: doc.id,
          name: doc.data().name,
          description: doc.data().description,
          img: require("@/assets/products/1.jpg"),
        });
      });
    });
  },
  methods: {
    create() {
      this.$router.push({path:'/list/new'},{name:'New List', params:{edit:false}});
    },
    update(product) {
      this.$router.push({path:'/list/' + product.id + '/edit'},
      {name: 'edit', params: { id: product.id, edit:true }}
      )
    },

    delProduct(i) {
      this.$bvModal.show("modal-1");
      this.deleteId = i;
    },
    handleOk() {
      this.delete = true;
      if (this.delete) {
        db.collection("products")
          .doc(this.deleteId)
          .delete()
          .then(() => {
            console.log("Document Deleted");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
  },
};
</script>

<style scoped>
.s_product_col {
  margin-bottom: 30px;
}
.s_product {
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.25);
  width: 100%;
  padding-bottom: 0px;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.product_img {
  width: 100%;
  height: 200px;
}
.s_product img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.product_content {
  padding-left: 20px;
  padding-right: 10px;
  font-family: "Open Sans", sans-serif;
}
.product_content h4 {
  text-align: left;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #000000;
  margin: 0;
  margin-top: 10px;
}
.product_content h6 {
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-align: left;
  color: #000000;
  margin-top: 10px;
}
.price {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #2a66bb;
  margin-top: 5px;
  text-align: left;
}
.s_price {
  margin-top: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;

  color: #000000;
  text-align: left;
}
.tags {
  max-width: 100%;
  display: flex;
  align-items: center;
  margin-top: 5px;
  flex-wrap: wrap;
}
.tags .s_tag {
  background: #f4f4f4;
  border-radius: 30px;
  padding: 6px 8px;
  margin-right: 7px;
  font-weight: 600;
  font-size: 11px;
  text-align: center;
  margin-bottom: 5px;
  color: #000000;
}
.product_content .btns {
  width: 90%;

  justify-content: center;
  align-items: center;
  display: flex;
  margin: 20px auto;
  margin-bottom: 15px;
}
.btns .btn {
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  width: 90px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;

  color: #000000;
}
.create_btn {
  max-width: 200px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #38485f;
  color: #fff;
  text-transform: capitalize;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  color: #ffffff;
  margin-top: 10px;
  margin-left: 15px;
}
</style>
