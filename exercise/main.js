Vue.component("product",{
    template:
`<div class="product">
        <div class="product-image">
            <img v-bind:src="image">
        </div>
        <div class="product-info">
            <h1>{{ brandproduct }}</h1>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of Stock</p>
            <ul>
                <li v-for="detail in details">{{ detail.text }}</li>
            </ul>
            <ul>
                <div v-for="(variant,index) in variants" :key="variant.variantId" class="color-box"
                :style="{backgroundColor:variant.variantColor}" @mouseover="changeimagepath(index)">
                </div>
                <button @click="addOneCart" 
                :disabled="!inStock" 
                :class="{disabledButton:!inStock}">Add To Cart</button>
            </ul>
        </div>
    </div>`,
    data(){
        return {product:'Socks',
        brand:'DoubleVue ',
        selectedVariant:0,
        inStock:true,
        details:[
            {text:'80% cotton'},
            {text:'20% polyester'},
            {text:'Gender-neutral'}
        ],
        variants:[
            {variantId:2234, variantColor:'green', variantImage:'assets/images/socks_green.jpg',
            variantQuantity:10
            },
            {variantId:2235, variantColor:'blue', variantImage:'assets/images/socks_blue.jpg',
            variantQuantity:0
            }
        ],
        }
    },
    methods:{
        addOneCart(){
           this.$emit('add-to-cart',this.variants[this.selectedVariant].variantId);
        },
        changeimagepath(index){
            this.selectedVariant=index
        }
    },
    computed:{
        brandproduct(){
            return this.brand+this.product
        },
        image(){
            return this.variants[this.selectedVariant].variantImage
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
});

let app = new Vue({
    el:'#app',
    data:{
        cart:[]
    },
    methods:{
        addToCart(variantId){
            this.cart.push(variantId)
        }
    }
});

// let app = new Vue({
//     el:'#app',
//     data:{
//         product:'Socks',
//         selectedVariant:0,
//         // inventory:0
//         details:[
//             {text:'80% cotton'},
//             {text:'20% polyester'},
//             {text:'Gender-neutral'}
//         ],
//         variants:[
//             {variantId:2234, variantColor:'green', variantImage:'assets/images/socks_green.jpg',
//             variantQuantity:10
//             },
//             {variantId:2235, variantColor:'blue', variantImage:'assets/images/socks_blue.jpg',
//             variantQuantity:0
//             }
//         ],
//         //{}하나하나가 객체임.
//         cart:0,
//         brand:'DoubleVue '
//     },
//     methods:{
//         addToCart(){
//             this.cart+=1
//         },
//         changeimagepath(index){
//             this.selectedVariant=index
//         }
//     },
//     computed:{
//         brandproduct:function(){
//             return this.brand+this.product
//         },
//         image(){
//             return this.variants[this.selectedVariant].variantImage
//         },
//         inStock(){
//             return this.variants[this.selectedVariant].variantQuantity
//         }
//     }
// });