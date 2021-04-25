<?php

/*
 * Template Name: Home Page Template
 * description: >-
  Page template without sidebar
 */

global $post;

get_header();
?>
	<main id="primary" class="home-main">
		<div class="welcome-view">

			<div class="welcome-view__upper-wrapper">

				<div class="twenty-big-logo__holder">

					<div class="twenty-big-logo--outline"></div>

					<div class="twenty-big-logo--light"></div>

				</div>
				
				<div class="hero-image">

				<video muted id="heroVideo">
					<source src="<?php echo get_template_directory_uri().'/Twenty-Dawg-Promo.mp4'; ?>" type="video/mp4">
				</video>
				</div>

			</div>

			<div class="scroll-down__container">

				<div class="scroll-down wrapper">
					<div class="chevron"></div>
					<div class="chevron"></div>
					<div class="chevron"></div>
				</div>

			</div>

		</div>


		
		<?php
			get_template_part( 'template-parts/home-products-showcase', 'page' );
		?>

		<?php
			get_template_part( 'template-parts/home-lookbook', 'page' );
		?>


	</main>

	
<?php
get_footer();