import ImagesAndAnimations from "./Container/ImagesAndAnimations.jsx"
import { Products, ProductItems, NavSuggest }from "./Container/Products.jsx"
import NewProduct from "./Container/NewProduct.jsx"
import AdversImages from "./Container/AdversImages.jsx"
import MostViewed from "./Container/MostViewed.jsx"
import LatestPost from "./Container/LatestPost.jsx"

import { 
    product1Img,product2Img,product3Img,product4Img,product5Img,product6Img,product7Img,product8Img,product9Img,product10Img,product11Img,product12Img,product13Img,product14Img,product15Img,
    suggest1,suggest2,suggest3,suggest4,suggest5,suggest6,suggest7,suggest8,suggest9,
    img1,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,
} from "../const/img.js"


const Container = () => {
    const navProducts1 = [
        {
            id: 1,
            title: 'LATEST',
        },
        {
            id: 2,
            title: 'BEST SELLER',
        },
        {
            id: 3,
            title: 'FEATURED',
        },
    ]
    const products = [
        {
            id: 1,
            isSale: true,
            img: product1Img,
            name: 'Modular Modern',
            oldPrice: 9.00,
            newPrice: 7.00,
            rating: 0,
        },
        {
            id: 2,
            isSale: false,
            img: product2Img,
            name: 'Modular Modern',
            oldPrice: '',
            newPrice: 10.00,
            rating: 3.5,
        },
        {
            id: 3,
            isSale: true,
            img: product3Img,
            name: 'Modular Modern',
            oldPrice: 3.00,
            newPrice: 2.00,
            rating: 2,
        },
        {
            id: 4,
            isSale: false,
            img: product4Img,
            name: 'Modular Modern',
            oldPrice: '',
            newPrice: 13.00,
            rating: 3,
        },
        {
            id: 5,
            isSale: false,
            img: product5Img,
            name: 'Modular Modern',
            oldPrice: '',
            newPrice: 14.00,
            rating: 3,
        },
        {
            id: 6,
            isSale: false,
            img: product6Img,
            name: 'Praesent at',
            oldPrice: '',
            newPrice: 15.00,
            rating: 0,
        },
        {
            id: 7,
            isSale: false,
            img: product7Img,
            name: 'Laoreet ultrices',
            oldPrice: '',
            newPrice: 35.00,
            rating: 4,
        },
        {
            id: 8,
            isSale: true,
            img: product8Img,
            name: 'Nisi vitae',
            oldPrice: 40,
            newPrice: 35.00,
            rating: 4,
        },
        {
            id: 9,
            isSale: false,
            img: product9Img,
            name: 'Maecenas consequat',
            oldPrice: '',
            newPrice: 35.00,
            rating: 4,
        },
        {
            id: 10,
            isSale: false,
            img: product10Img,
            name: 'Patient sofa',
            oldPrice: '',
            newPrice: 30.00,
            rating: 3,
        },
        {
            id: 11,
            isSale: true,
            img: product11Img,
            name: 'Iaculis orci',
            oldPrice: 40.00,
            newPrice: 35.00,
            rating: 4.5,
        },
        {
            id: 12,
            isSale: true,
            img: product12Img,
            name: 'Variable Product – Color',
            oldPrice: 48.00,
            newPrice: 45.00,
            rating: 4,
        },
        {
            id: 13,
            isSale: true,
            img: product13Img,
            name: 'Variable Product – Image',
            oldPrice: 35.00,
            newPrice: 32.00,
            rating: 4,
        },
        {
            id: 14,
            isSale: true,
            img: product14Img,
            name: 'Curabitur non',
            oldPrice: 60,
            newPrice: 54.00,
            rating: 3,
        },
        {
            id: 15,
            isSale: false,
            img: product15Img,
            name: 'Modular Modern',
            oldPrice: '',
            newPrice: 15.00,
            rating: 3,
        },
    ]
    const navProducts2 = [
        {
            id: 1,
            title: 'SUGGEST COLLECTION',
        },
    ]

    const titles = [
        {
            id: 0,
            img: suggest1,
            title: 'Office chair',
        },
        {
            id: 1,
            img: suggest2,
            title: 'Sofas',
        },
        {
            id: 2,
            img: suggest3,
            title: 'Good chair',
        },
        {
            id: 3,
            img: suggest4,
            title: 'Coffee chair',
        },
        {
            id: 4,
            img: suggest5,
            title: 'Ourdoor table',
        },
        {
            id: 5,
            img: suggest6,
            title: 'Ipsum Chair',
        },
        {
            id: 6,
            img: suggest7,
            title: 'Wood Chair',
        },
        {
            id: 7,
            img: suggest8,
            title: 'Coffee Tables',
        },
        {
            id: 8,
            img: suggest9,
            title: 'Living Room',
        },  
    ]

    const adversImages = [
        { id: 0, img: img12},
        { id: 1, img: img13},
        { id: 2, img: img14},
    ]

    const productMostViewed = [
        {
            id: 0,
            col : [
                {
                    id: 16,
                    isSale: true,
                    img: product3Img,
                    name: 'Modular Modern',
                    oldPrice: 9.00,
                    newPrice: 7.00,
                    rating: 3.5,
                },
                {
                    id: 17,
                    isSale: true,
                    img: product2Img,
                    name: 'External/Affiliate Product',
                    oldPrice: 9.00,
                    newPrice: 8.00,
                    rating: 5,
                },
            ]
        },
        {
            id: 1,
            col : [
                {
                    id: 18,
                    isSale: false,
                    img: product4Img,
                    name: 'Variable Product',
                    oldPrice: '',
                    newPrice: 9.00,
                    rating: 0,
                },
                {
                    id: 19,
                    isSale: false,
                    img: product5Img,
                    name: 'Modular Modern',
                    oldPrice: '',
                    newPrice: 9.00,
                    rating: 3,
                },
            ]
        },
        {
            id: 2,
            col : [
                {
                    id: 20,
                    isSale: false,
                    img: img15,
                    name: 'Variable Product',
                    oldPrice: '',
                    newPrice: 9.00,
                    rating: 0,
                },
                {
                    id: 21,
                    isSale: false,
                    img: suggest1,
                    name: 'Modular Modern',
                    oldPrice: '',
                    newPrice: 9.00,
                    rating: 0,
                },
            ]
        },
        {
            id: 3,
            col : [
                {
                    id: 22,
                    isSale: false,
                    img: img16,
                    name: 'Donec Cursus',
                    oldPrice: '',
                    newPrice: 15.00,
                    rating: 0,
                },
                {
                    id: 23,
                    isSale: true,
                    img: img17,
                    name: 'Grouped Product',
                    oldPrice: 9.00,
                    newPrice: 15.00,
                    rating: 4,
                },
            ]
        },
        {
            id: 4,
            col : [
                {
                    id: 24,
                    isSale: true,
                    img: suggest9,
                    name: 'scelerisque accumsan',
                    oldPrice: 15.00,
                    newPrice: 12.00,
                    rating: 2,
                },
                {
                    id: 25,
                    isSale: true,
                    img: img18,
                    name: 'Urna in eros',
                    oldPrice: 15.00,
                    newPrice: 12.00,
                    rating: 4,
                },
            ]
        },
    ]

    const productLatestPost = [
        {
            id: 0,
            img: img19,
            date: 3,
            month: 'NOV',
            author: 'Admin',
            title: 'Latin professor at Hampden-Sydney',
            excerpt: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.',
        },
        {
            id: 1,
            img: img20,
            date: 3,
            month: 'NOV',
            author: 'Admin',
            title: 'Morbi semper eros sit amet mi molestie',
            excerpt: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.',
        },
        {
            id: 2,
            img: img1,
            date: 3,
            month: 'NOV',
            author: 'Admin',
            title: 'Quisque a turpis ornare, efficitur nibh',
            excerpt: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.',
        },
        {
            id: 3,
            img: img21,
            date: 3,
            month: 'NOV',
            author: 'Admin',
            title: 'Richard McClintock at Hampden-Sydney',
            excerpt: 'Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature.',
        },
    ]

    

    return (
        <div className="container">
            <div className="grid wide">
                <ImagesAndAnimations/>
                <Products navProducts={navProducts1}>
                    <ProductItems products={products}/>
                </Products>
                <NewProduct />
                <Products navProducts={navProducts2}>
                    <NavSuggest products={products} titles={titles}/>
                    <AdversImages imgs={adversImages}/>
                    <MostViewed props={productMostViewed}/>
                    <LatestPost props={productLatestPost}/>
                </Products>
            </div>
        </div>
    )
}

export default Container