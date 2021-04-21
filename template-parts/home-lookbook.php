

<section class="lookbook-carousel">
<div class="swiper-container-lookbook">

    <!-- Add Pagination -->
    <div class="swiper-pagination swiper-pagination-categories"></div>
    <!-- Additional required wrapper -->
        <div class="swiper-wrapper">

            <?php
                $lookbook = array(
                    'post_type'=> 'lookbook',
                    'posts_per_page' => -1,
                    // 'orderby'        => 'rand',
                );    

                $your_query = new WP_Query( $lookbook );

                // "loop" through query (even though it's just one page) 
                while ( $your_query->have_posts() ) :
                    $your_query->post_title(); $your_query->the_post();

                    echo '<div class="swiper-slide lookbook__image" style="background-image: url(' .get_the_post_thumbnail_url(). '); background-repeat: no-repeat;">';
                    echo $your_query->post_title();
                    echo '</div>';


                endwhile;
                // reset post data (important!)
                wp_reset_postdata();

            ?>

        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>


    </div>
</div>
</section>