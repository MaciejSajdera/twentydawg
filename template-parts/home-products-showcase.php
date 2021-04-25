<?php
$product_1 = get_field('product_1');
$product_2 = get_field('product_2');
$product_3 = get_field('product_3');
?>


<section class="products-showcase">
    <!-- <h1>SASZETY</h1> -->

    <div class="products-showcase__container">
        <div class="product">
            <div class="swiper-container-product swiper-container-product_1">

                <div class="swiper-wrapper">

                    <?php if ($product_1['image_1']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_1['image_1'].'" style="background-image: url('.$product_1['image_1'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                    <?php if ($product_1['image_2']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_1['image_2'].'" style="background-image: url('.$product_1['image_2'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                    <?php if ($product_1['image_3']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_1['image_3'].'" style="background-image: url('.$product_1['image_3'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                </div>

                <div class="swiper-pagination swiper-pagination-product_1"></div>

                <div class="swiper-button-prev swiper-button-prev-product_1"></div>
                <div class="swiper-button-next swiper-button-next-product_1"></div>

            </div>

            <div class="product__info">
            <div class="product__info-upper">
                    <h3><?php echo $product_1['title']; ?></h3>
                    <p class="price"><?php echo $product_1['price']; ?></p>
                </div>
                <a class="order-button" href="<?php echo $product_1['link'] ?>">ZAMÓW</a>
            </div>
        </div>

        <div class="product">
            <div class="swiper-container-product swiper-container-product_2">

                <div class="swiper-wrapper">

                    <?php if ($product_2['image_1']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_2['image_1'].'" style="background-image: url('.$product_2['image_1'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                    <?php if ($product_2['image_2']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_2['image_2'].'" style="background-image: url('.$product_2['image_2'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                    <?php if ($product_2['image_3']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_2['image_3'].'" style="background-image: url('.$product_2['image_3'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                </div>

                <div class="swiper-pagination swiper-pagination-product_2"></div>

                <div class="swiper-button-prev swiper-button-prev-product_2"></div>
                <div class="swiper-button-next swiper-button-next-product_2"></div>

            </div>

            <div class="product__info">
                <div class="product__info-upper">
                    <h3><?php echo $product_2['title']; ?></h3>
                    <p class="price"><?php echo $product_2['price']; ?></p>
                </div>

                <a class="order-button" href="<?php echo $product_2['link'] ?>">ZAMÓW</a>
            </div>
        </div>

        <div class="product">
            <div class="swiper-container-product swiper-container-product_3">

                <div class="swiper-wrapper gallery">

                    <?php if ($product_3['image_1']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_3['image_1'].'" style="background-image: url('.$product_3['image_1'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                    <?php if ($product_3['image_2']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_3['image_2'].'" style="background-image: url('.$product_3['image_2'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                    <?php if ($product_3['image_3']) {
                    echo '<div class="swiper-slide product__image" data-src="'.$product_3['image_3'].'" style="background-image: url('.$product_3['image_3'].'); background-repeat: no-repeat;"></div>';
                    }
                     ?>

                </div>

                <div class="swiper-pagination swiper-pagination-product_3"></div>

                <div class="swiper-button-prev swiper-button-prev-product_3"></div>
                <div class="swiper-button-next swiper-button-next-product_3"></div>

            </div>

            <div class="product__info">
            <div class="product__info-upper">
                    <h3><?php echo $product_3['title']; ?></h3>
                    <p class="price"><?php echo $product_3['price']; ?></p>
                </div>
                <a class="order-button" href="<?php echo $product_3['link'] ?>">ZAMÓW</a>
            </div>
        </div>

    </div>


    <div class="welcome-view__pseudo-elements">
			
            <div class="locations-wrapper">
                <!-- <div class="krkloc"></div>
                <div class="ldnloc"></div> -->

                <p class="realtalk">
                    Przyjmujemy preordery jeszcze przez:
                </p>

                <div class="continer centerIt">

                    <div class="counter">
                        <div class="days">
                        <div class="value font-outline">00</div>
                        <span>Dni</span>
                        </div>

                        <div class="hours">
                        <div class="value font-outline">00</div>
                        <span>Godzin</span>
                        </div>

                        <div class="minutes">
                        <div class="value font-outline">00</div>
                        <span>Minut</span>
                        </div>

                        <div class="seconds">
                        <div class="value font-outline">00</div>
                        <span>Sekund</span>
                        </div>

                    </div>

            </div>

        </div>
    
    </div>


</section>