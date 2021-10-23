import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { img7, img8, img9, img10, img11 } from '../../const/img';
import ViewCart from './ViewCart.jsx';

function HeaderMenu() {
    return (
        <div className="header__menu">
            <div className="grid wide">
                <div className="header__menu__container v-center">
                    <MenuButtonMobile/>
                    <SubMenu/>
                    <HeaderMenuRight/>
                </div>
            </div>
        </div>
    )
}

function MenuButtonMobile() {
    const navsubMenu = [
        {
            id: 1,
            title: 'Home',
            children1: [
                {
                    id: 1,
                    title1 : 'Home Page 1',
                    children2: []
                },
                {
                    id: 2,
                    title1 : 'Home Page 2',
                    children2: []
                },
                {
                    id: 3,
                    title1 : 'Home Page 3',
                    children2: []
                },
                {
                    id: 4,
                    title1 : 'Home Page 4',
                    children2: []
                },
                {
                    id: 5,
                    title1 : 'Home Page 5',
                    children2: []
                },
            ]
        },
        {
            id: 2,
            title: 'Furniture',
            children1: [
                {
                    id: 1,
                    title1: 'Table',
                    children2: [
                        {
                            id: 1,
                            title2: 'Kitchen & Dining Room Tables',
                        },
                        {
                            id: 2,
                            title2: 'Folding Table',
                        },
                        {
                            id: 3,
                            title2: 'Living Room Tables',
                        },
                        {
                            id: 4,
                            title2: 'Sofa Tables',
                        },
                        {
                            id: 5,
                            title2: 'End Tables',
                        },
                        {
                            id: 6,
                            title2: 'Coffee Tables',
                        },
                        {
                            id: 7,
                            title2: 'Pedestal Tables',
                        },
                        {
                            id: 8,
                            title2: 'Home Office Desks',
                        },
                    ]
                },
                {
                    id: 2,
                    title1: 'Table',
                    children2: [
                        {
                            id: 1,
                            title2: 'Living Room Tables',
                        },
                        {
                            id: 2,
                            title2: 'Sofa Tables',
                        },
                        {
                            id: 3,
                            title2: 'End Tables',
                        },
                        {
                            id: 4,
                            title2: 'Coffee Tables',
                        },
                        {
                            id: 5,
                            title2: 'Pedestal Tables',
                        },
                        {
                            id: 6,
                            title2: 'Home Office Desks',
                        },
                        {
                            id: 7,
                            title2: 'Kids Furniture',
                        },
                        {
                            id: 8,
                            title2: 'Kitchen & Dinning Room Sets',
                        },
                    ]
                },
                {
                    id: 3,
                    title1: 'Table',
                    children2: [
                        {
                            id: 1,
                            title2: 'Kitchen & Dining Room Tables',
                        },
                        {
                            id: 2,
                            title2: 'Folding Tables',
                        },
                        {
                            id: 3,
                            title2: 'End Tables',
                        },
                        {
                            id: 4,
                            title2: 'Coffee Tables',
                        },
                        {
                            id: 5,
                            title2: 'PedestalTables',
                        },
                        {
                            id: 6,
                            title2: 'Home Office Desks',
                        },
                        {
                            id: 7,
                            title2: 'Kids’Furniture',
                        },
                        {
                            id: 8,
                            title2: 'Kitchen & Dinning Room Sets',
                        },
                    ]
                },
                {
                    id: 4,
                    title1: 'Table',
                    children2: [
                        {
                            id: 1,
                            title2: 'Dining Room Tables',
                        },
                        {
                            id: 2,
                            title2: 'Folding Tables',
                        },
                        {
                            id: 3,
                            title2: 'Living Room Tables',
                        },
                        {
                            id: 4,
                            title2: 'Sofa Tables',
                        },
                        {
                            id: 5,
                            title2: 'End Tables',
                        },
                        {
                            id: 6,
                            title2: 'Coffee Tables',
                        },
                        {
                            id: 7,
                            title2: 'Pedestal Tables',
                        },
                    ]
                },
            ]
        },
        {
            id: 3,
            title: 'Coffee Tables',
            children1: []
        },
        {
            id: 4,
            title: 'Sofas',
            children1: []
        },
        {
            id: 5,
            title: 'Bedroom furniture',
            children1: [
                {
                    id: 1,
                    title1 : 'Sofa',
                    children2: []
                },
                {
                    id: 2,
                    title1 : 'Chair',
                    children2: []
                },
                {
                    id: 3,
                    title1 : 'Bad',
                    children2: []
                },
                {
                    id: 4,
                    title1 : 'Furniture chest',
                    children2: []
                }
            ]
        },
        {
            id: 6,
            title: 'Shop',
            children1: [
                {
                    id: 1,
                    title1 : 'Product Types',
                    children2: [
                        {
                            id: 1,
                            title2: 'Simple Proudct',
                        },
                        {
                            id: 2,
                            title2: 'Grouped Prouduct',
                        },
                        {
                            id: 3,
                            title2: 'Variable Product',
                        },
                        {
                            id: 4,
                            title2: 'Variable Product – Color',
                        },
                        {
                            id: 5,
                            title2: 'Variable Product – Image',
                        },
                        {
                            id: 6,
                            title2: 'External/Affiliate Product',
                        },
                    ]
                },
                {
                    id: 2,
                    title1 : 'Shop Pages',
                    children2: [
                        {
                            id: 1,
                            title2: 'Shopping Cart',
                        },
                        {
                            id: 2,
                            title2: 'Checkout',
                        },
                        {
                            id: 3,
                            title2: 'My Account',
                        },
                        {
                            id: 4,
                            title2: 'Wishlist',
                        },
                        {
                            id: 5,
                            title2: '404',
                        },
                        {
                            id: 6,
                            title2: 'Product Tag',
                        },
                    ]
                },
                {
                    id: 3,
                    title1 : 'Shop Shortcodes',
                    children2: [
                        {
                            id: 1,
                            title2: 'SNS Featured Categories',
                        },
                        {
                            id: 2,
                            title2: 'SNS Product Tabs',
                        },
                        {
                            id: 3,
                            title2: 'SNS Products',
                        },
                    ]
                },
            ]
        },
        {
            id: 7,
            title: 'Blog',
            children1: [
                {
                    id: 1,
                    title1: 'Blog FullWidth',
                    children2: []
                },
                {
                    id: 2,
                    title1: 'Blog FullWidth 2 Columns',
                    children2: []
                },
                {
                    id: 3,
                    title1: 'Blog FullWidth 3 Columns',
                    children2: []
                },
                {
                    id: 4,
                    title1: 'Blog Masonry',
                    children2: []
                },
                {
                    id: 5,
                    title1: 'Blog Left Sidebar',
                    children2: []
                },
                {
                    id: 6,
                    title1: 'Blog Right Sidebar',
                    children2: []
                },
                {
                    id: 7,
                    title1: 'Single Post',
                    children2: []
                },
            ]
        },
        {
            id: 8,
            title: 'Shortcodes',
            children1: [
                {
                    id: 1,
                    title1: 'Shortcodes',
                    children2: [
                        {
                            id: 1,
                            title2: 'Accordions',
                        },
                        {
                            id: 2,
                            title2: 'Custom Heading',
                        },
                        {
                            id: 3,
                            title2: 'Messages',
                        },
                        {
                            id: 4,
                            title2: 'Progress Bar',
                        },
                        {
                            id: 5,
                            title2: 'SNS Counter',
                        },
                        {
                            id: 6,
                            title2: 'SNS Custom Box',
                        },
                        {
                            id: 7,
                            title2: 'SNS Featured Categories',
                        },
                    ]
                },
                {
                    id: 2,
                    title1: 'Shortcodes',
                    children2: [
                        {
                            id: 1,
                            title2: 'SNS Latest Posts',
                        },
                        {
                            id: 2,
                            title2: 'SNS Member',
                        },
                        {
                            id: 3,
                            title2: 'SNS Our Brand',
                        },
                        {
                            id: 4,
                            title2: 'SNS Product Tabs',
                        },
                        {
                            id: 5,
                            title2: 'SNS Products',
                        },
                        {
                            id: 6,
                            title2: 'SNS Testimonials',
                        },
                    ]
                },
            ]
        },
        {
            id: 9,
            title: 'Contact us',
            children1: [],
        },
    ]

    const [isShow, setShow] = useState(false)
    const [openId, setOpenId] = useState(0)

    const menuClick = () => setShow(() => true)

    const modal = useRef(null);
    const modalClick = (e) => e.target === modal.current && setShow(() => false);

    return (
        <div className="menu-button-mobile">
            <i className="fas fa-bars" onClick={menuClick}></i>
            <div 
                className={classNames("menu-button-mobile__modal", {'show': isShow})} 
                onClick={modalClick}
                ref={modal}
            >
                <div className="navsub-menu">
                    {navsubMenu.map(({ id, title, children1 }) => 
                        <NavsubMenuItem key={id} onClick={() => setShow(false)} openId={openId} setOpenId={setOpenId} id={id} title = {title} children1={children1}/>)
                    }
                </div>
            </div>
        </div>
    )
}

function NavsubMenuItem(props) {
    const { id, title, children1, openId, setOpenId, onClick } = props
    const isHomePage = title.toUpperCase() === 'HOME'
    const [openChildId, setOpenChildId] = useState(0)
    
    const menuChildren1 = useRef(null)
    const menuChildren1Node = menuChildren1.current
    
    //When click open-close-button
    const handleClick = () => {
        if (openId === id) {
            menuChildren1Node.style.height = '0px'
            setOpenId(0)
        } else {
            menuChildren1Node.style.height = menuChildren1Node.scrollHeight + 'px'
            setOpenId(id)
        }
    }
    
    if (id !== openId && menuChildren1Node) {
        menuChildren1Node.style.height = menuChildren1Node.scrollHeight + 'px'
        menuChildren1Node.style.height = '0px'
    }
       
    return (
        <div className="navsub-menu__item">
            <div className="navsub-menu__item__title">
                <NavLink 
                    to={`/React-simen-demo${isHomePage ? '' : '/' + title.toLowerCase()}`}
                    exact={isHomePage}
                    onClick={onClick}
                >
                    {title}
                </NavLink>
                {children1.length > 0 && 
                    <button 
                        className={classNames("btn__open-close", {'open': openId === id})} 
                        onClick={handleClick}
                    />
                }
            </div>
            {children1.length > 0 && 
                <div className="navsub-menu__children-1" ref={menuChildren1}>
                    {children1.map(({ id, title1, children2 }) => 
                        <NavsubMenuChildren1Item 
                            key = {id} 
                            id={id} title1 = {title1} children2={children2} 
                            menuChildren1Node={menuChildren1Node}
                            openChildId={openChildId} setOpenChildId={setOpenChildId}/>)
                    }
            </div>}
        </div>
    )
}

function NavsubMenuChildren1Item(props) {
    const { id, title1, children2, openChildId, setOpenChildId, menuChildren1Node } = props
    const menuChildren2 = useRef(null)
    const menuChildren2Node = menuChildren2.current

    // When click child open-close-button 
    const handleClick = () => {
        console.log(menuChildren1Node.pageYoffset);
        if (id === openChildId) {
            console.log(menuChildren1Node.style.height);
            menuChildren1Node.style.height = 'auto'
            menuChildren2Node.style.height = '0px'
            setOpenChildId(0)
        } else {
            console.log(menuChildren1Node.style.height);
            menuChildren2Node.style.height = menuChildren2Node.scrollHeight + 'px'
            menuChildren1Node.style.height = 'auto'
            setOpenChildId(id)
        }
    }

    if (id !== openChildId && menuChildren2Node) {
        menuChildren2Node.style.height = '0px'
    }

    return (
        <div className="navsub-menu__children-1__item">
            <div className="navsub-menu__children-1__title navsub-menu__item__title">
                <Link to='/React-simen-demo/no-content'>{title1}</Link>
                {children2.length > 0 && <button 
                    className={classNames("btn__open-close", {'open': openChildId === id})}
                    onClick={handleClick}
                    />}
            </div>
            {children2.length > 0 && 
            <div 
                className="navsub-menu__children-2" 
                ref={menuChildren2}
            >
                {children2.map(({id, title2}) => <NavsubMenuChildren2Title key={id} title2={title2}/>)}
            </div>}
        </div>
    )
}

function NavsubMenuChildren2Title(props) {
    const { title2 } = props
    return (
        <div className="navsub-menu__children-2__title navsub-menu__item__title">
            <Link to='/React-simen-demo/no-content'>{title2}</Link>
        </div>
    )
}

function SubMenu() {
    const home = {
        name: 'HOME',
        items: [
            {
                id: 1,
                item: 'Home Page 1',
            },
            {
                id: 2,
                item: 'Home Page 2',
            },
            {
                id: 3,
                item: 'Home Page 3',
            },
            {
                id: 4,
                item: 'Home Page 4',
            },
            {
                id: 5,
                item: 'Home Page 5',
            },
        ]
    }

    const furniture = {
            name: 'FURNITURE',
            isParent: true,
            list : [
                {
                    id: 1,
                    title: 'TABLE',
                    items : [
                        {
                            id: 1,
                            item: 'Kitchen & Dining Room Tables',
                        },
                        {
                            id: 2,
                            item: 'Folding Table',
                        },
                        {
                            id: 3,
                            item: 'Living Room Tables',
                        },
                        {
                            id: 4,
                            item: 'Sofa Tables',
                        },
                        {
                            id: 5,
                            item: 'End Tables',
                        },
                        {
                            id: 6,
                            item: 'Coffee Tables',
                        },
                        {
                            id: 7,
                            item: 'Pedestal Tables',
                        },
                        {
                            id: 8,
                            item: 'Home Office Desks',
                        },
                    ]
                },
                {
                    id: 2,
                    title: 'TABLE',
                    items : [
                        {
                            id: 1,
                            item: 'Living Room Tables',
                        },
                        {
                            id: 2,
                            item: 'Sofa Tables',
                        },
                        {
                            id: 3,
                            item: 'End Tables',
                        },
                        {
                            id: 4,
                            item: 'Coffee Tables',
                        },
                        {
                            id: 5,
                            item: 'Pedestal Tables',
                        },
                        {
                            id: 6,
                            item: 'Home Office Desks',
                        },
                        {
                            id: 7,
                            item: 'Kids Furniture',
                        },
                        {
                            id: 8,
                            item: 'Kitchen & Dinning Room Sets',
                        },
                    ]
                },
                {
                    id: 3,
                    title: 'TABLE',
                    items : [
                        {
                            id: 1,
                            item: 'Kitchen & Dining Room Tables',
                        },
                        {
                            id: 2,
                            item: 'Folding Tables',
                        },
                        {
                            id: 3,
                            item: 'End Tables',
                        },
                        {
                            id: 4,
                            item: 'Coffee Tables',
                        },
                        {
                            id: 5,
                            item: 'PedestalTables',
                        },
                        {
                            id: 6,
                            item: 'Home Office Desks',
                        },
                        {
                            id: 7,
                            item: 'Kids’Furniture',
                        },
                        {
                            id: 8,
                            item: 'Kitchen & Dinning Room Sets',
                        },
                    ]
                },
                {
                    id: 4,
                    title: 'TABLE',
                    items : [
                        {
                            id: 1,
                            item: 'Dining Room Tables',
                        },
                        {
                            id: 2,
                            item: 'Folding Tables',
                        },
                        {
                            id: 3,
                            item: 'Living Room Tables',
                        },
                        {
                            id: 4,
                            item: 'Sofa Tables',
                        },
                        {
                            id: 5,
                            item: 'End Tables',
                        },
                        {
                            id: 6,
                            item: 'Coffee Tables',
                        },
                        {
                            id: 7,
                            item: 'Pedestal Tables',
                        },
                        
                    ]
                },
            ],
            items: [],
            privateClass: 'furniture__list',
            colClass: 'col xlg-3',
        }

    const coffeeTables = {
        name: 'COFFEE TABLES',
        isParent: false,
        items: [],
    }

    const sofas = {
        name: 'SOFAS',
        isParent: false,
        items: [],
    }

    const bedroomFurniture = {
        name: 'BEDROOM FURNITURE',
        isParent: true,
        listImages: [
            {
                id: 1,
                img: img7,
                title: 'SOFA',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ornare urna. Suspendisse a lobortis ex, at efficitur',
            },
            {
                id: 2,
                img: img8,
                title: 'CHAIR',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ornare urna. Suspendisse a lobortis ex, at efficitur',
            },
            {
                id: 3,
                img: img9,
                title: 'BAD',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ornare urna. Suspendisse a lobortis ex, at efficitur',
            },
            {
                id: 4,
                img: img10,
                title: 'FURNITURE CHEST',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eu ornare urna. Suspendisse a lobortis ex, at efficitur',
            },
        ],
        items: [],
        privateClass: 'bedroom-furniture__list',
        colClass: 'col xlg-3',
    }

    const shop = {
        name: 'SHOP',
        isParent: true,
        list : [
            {
                id: 1,
                title: 'PRODUCT TYPES',
                items : [
                    {
                        id: 1,
                        item: 'Simple Proudct',
                    },
                    {
                        id: 2,
                        item: 'Grouped Prouduct',
                    },
                    {
                        id: 3,
                        item: 'Variable Product',
                    },
                    {
                        id: 4,
                        item: 'Variable Product – Color',
                    },
                    {
                        id: 5,
                        item: 'Variable Product – Image',
                    },
                    {
                        id: 6,
                        item: 'External/Affiliate Product',
                    },
  
                ]
            },
            {
                id: 2,
                title: 'SHOP PAGES',
                items : [
                    {
                        id: 1,
                        item: 'Shopping Cart',
                    },
                    {
                        id: 2,
                        item: 'Checkout',
                    },
                    {
                        id: 3,
                        item: 'My Account',
                    },
                    {
                        id: 4,
                        item: 'Wishlist',
                    },
                    {
                        id: 5,
                        item: '404',
                    },
                    {
                        id: 6,
                        item: 'Product Tag',
                    },
                ]
            },
            {
                id: 3,
                title: 'SHOP SHORTCODES',
                items : [
                    {
                        id: 1,
                        item: 'SNS Featured Categories',
                    },
                    {
                        id: 2,
                        item: 'SNS Product Tabs',
                    },
                    {
                        id: 3,
                        item: 'SNS Products',
                    },
                ]
            },
        ],
        items: [],
        privateClass: 'shop__list',
        colClass: 'col xlg-4',
    }

    const blog = {
        name: 'BLOG',
        items: [
            {
                id: 1,
                item: 'Blog FullWidth',
            },
            {
                id: 2,
                item: 'Blog FullWidth 2 Columns',
            },
            {
                id: 3,
                item: 'Blog FullWidth 3 Columns',
            },
            {
                id: 4,
                item: 'Blog Masonry',
            },
            {
                id: 5,
                item: 'Blog Left Sidebar',
            },
            {
                id: 6,
                item: 'Blog Right Sidebar',
            },
            {
                id: 7,
                item: 'Single Post',
            },
        ]
    }

    const shortCodes = {
        name: 'SHORTCODES',
        isParent: true,
        list: [
            {
                id: 1,
                title: 'SHORTCODES',
                items : [
                    {
                        id: 1,
                        item: 'Accordions',
                    },
                    {
                        id: 2,
                        item: 'Custom Heading',
                    },
                    {
                        id: 3,
                        item: 'Messages',
                    },
                    {
                        id: 4,
                        item: 'Progress Bar',
                    },
                    {
                        id: 5,
                        item: 'SNS Counter',
                    },
                    {
                        id: 6,
                        item: 'SNS Custom Box',
                    },
                    {
                        id: 7,
                        item: 'SNS Featured Categories',
                    },
                    {
                        id: 8,
                        item: 'Home Office Desks',
                    },
                ]
            },
            {
                id: 2,
                title: 'SHORTCODES',
                items: [
                    {
                        id: 1,
                        item: 'SNS Latest Posts',
                    },
                    {
                        id: 2,
                        item: 'SNS Member',
                    },
                    {
                        id: 3,
                        item: 'SNS Our Brand',
                    },
                    {
                        id: 4,
                        item: 'SNS Product Tabs',
                    },
                    {
                        id: 5,
                        item: 'SNS Products',
                    },
                    {
                        id: 6,
                        item: 'SNS Testimonials',
                    },
                ]
            },
        ],
        items: [],
        privateClass: 'shortcodes__list',
        colClass: 'col xlg-4',
        imageLink: true,
    }

    const contactUs = {
        name: 'CONTACT US',
        isParent: false,
        items: [],
    }

    const data = [
        {
            id: 1,
            content: home,
        },
        {
            id: 2,
            content: furniture,
        },
        {
            id: 3,
            content: coffeeTables,
        },
        {
            id: 4,
            content: sofas,
        },
        {
            id: 5,
            content: bedroomFurniture,
        },
        {
            id: 6,
            content: shop,
        },
        {
            id: 7,
            content: blog,
        },
        {
            id: 8,
            content: shortCodes,
        },
        {
            id: 9,
            content: contactUs,
        },
    ]

    return (
        <ul className="sub-menu v-center hide-on-low-PC-mobile-tablet">
            {data.map(({id, content}) => <SubMenuItem key={id} id={id} props={content}/>)}
        </ul>
    )
}

function SubMenuItem({id, props}) {
    const {name, isParent, items, list, listImages, privateClass, colClass, imageLink} = props
    const isHomePage = name === 'HOME'

    return (
        <NavLink to={`/React-simen-demo${isHomePage ? '' : '/' + name.toLowerCase()}`}
            exact={isHomePage}
            activeClassName="sub-menu__item--active"
            className={classNames(
            'sub-menu__item', 
            {'sub-menu__item--static': list || listImages}, 
            )}
        >
            <SubMenuItemLink name={name} isParent={isParent}/>
            {items.length > 0 && 
                <ul className="sub-menu__item__children sub-menu__item__children--col-1">
                    {items.map(({id, item}) => <Col1Item key={id} item={item}/>)}
                </ul>
            }
            {colClass &&
                <div className={classNames("sub-menu__item__children", privateClass)}>
                    <div className="row">
                        {list && 
                        list.map(({id, title, items}) => {
                            return (
                                <div key={id} className={classNames(colClass)}>
                                    <TitleAndItems title={title} items={items}/>
                                </div>
                            )})
                        }
                        {imageLink &&
                            <div className={classNames(colClass)}>
                                <Link to='/React-simen-demo/no-content' className='image-link'>
                                    <img src={img11} alt=""/>
                                </Link>
                            </div>
                        }
                        {listImages && listImages.map(({id, img, title, content}) => {
                            return (
                                <div className={classNames(colClass)} key={id}>
                                    <ImageContent img={img} title={title} content={content}/>
                                </div>
                            )
                        })}
                    </div>
                </div>
            }
        </NavLink>
    )
}

function SubMenuItemLink({name, isParent}) {
    return (
        <span
            className={classNames('sub-menu__item__link', {'sub-menu__item__link--parent': isParent})}
        >
            {name}
        </span>
    )
}

function Col1Item({item}) {
    return (
        <li className="col-1__item">
            <Link to='/React-simen-demo/no-content' className="col-1__item__link">{item}</Link>
        </li>
    )
}

function TitleAndItems({title, items}) {
    return (
        <div className="title-and-items">
            <h3>{title}</h3>
            <ul className="items">
                {items && items.map(({id, item}) => <Item key={id} item={item}/>)}
            </ul>
        </div>
    )
}

function ImageContent({img, title, content}) {
    return (
        <>
        <Link to='/React-simen-demo/no-content' className="image">
            <img src={img} alt=""/>
        </Link>
        <Link to='/React-simen-demo/no-content' className="title">{title}</Link>
        <span className="content">{content}</span>
        </>
    )
}

function Item({item}) {
    return (
        <li className="item">
            <Link to='/React-simen-demo/no-content' className="link">{item}</Link>
        </li>
    )
}

const HeaderMenuRight = () => {
    return (
        <div className="header__menu__right v-center">
            <div className="header__menu__right__search">
                <i className="fa fa-search"></i>
                <div className="search__content">
                    <form action="" className="v-center">
                        <input type="text" placeholder="Search entire store here ..."/>
                        <button type="submit">SEARCH</button>
                    </form>
                </div>
            </div>
            <ViewCart />
        </div>
    )
}

export default HeaderMenu