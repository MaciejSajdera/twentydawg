<?php
$product_1 = get_field('product_1');
?>


<section class="products-showcase">
    <h1>SASZETY</h1>

    <div class="container">
        <div class="product">
            <div class="swiper-container-product">
                <div class="swiper-wrapper">
                    <div class="swiper-slide product__image" style="background-image: url(<?php echo $product_1['image_1'] ?>); background-repeat: no-repeat;">
                    </div>
                </div>

            </div>
            <div class="product__info">
                <h3><?php echo $product_1['title']; ?></h3>
                <p><?php echo $product_1['price']; ?>
            </div>
        </div>
        <div class="product">
            <div class="swiper-container-product"></div>
            <div class="product__info"></div>
        </div>
        <div class="product">
             <div class="swiper-container-product"></div>
            <div class="product__info"></div>
        </div>
    </div>
</section>