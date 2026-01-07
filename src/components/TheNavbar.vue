<template>
    <nav class="colorlib-nav" role="navigation">
        <div class="top-menu">
            <div class="container">
                <div class="row">
                    <div class="col-sm-7 col-md-9">
                        <div id="colorlib-logo">
                            <Routerlink to="/">The Doc Shop</Routerlink>
                        </div>
                    </div>
                    <div class="col-sm-5 col-md-3">
                        <form action="#" class="search-wrap">
                            <div class="form-group">
                                <input type="search" class="form-control search" placeholder="Search">
                                <button class="btn btn-primary submit-search text-center" type="submit">
                                    <i class="icon-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 text-left menu-1">
                        <ul>
                            <li class="active"><RouterLink to="/">Home</RouterLink></li>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li class="cart">
                                <Router-link to="/cart">
                                    <i class="icon-shopping_cart">Cart</i>
                                </Router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="sale">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 offset-sm-2 text-center">
                        <div class="row">
                            <div class="owl-carousel2">
                                <div class="item">
                                    <div class="col">
                                        <h3> <a href="#">Free Shipping on all orders over 100 euro!</a></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'TheNavbar'
    }
</script>