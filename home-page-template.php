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

			<div class="twenty-big-logo__holder">

				<div class="twenty-big-logo--outline"></div>

				<div class="twenty-big-logo--light"></div>

			</div>
			
			<div class="hero-image">
			<!-- <video autoplay loop muted>
				<source src="<?php echo get_template_directory_uri().'/Twenty-Dawg-Promo.mp4'; ?>" type="video/mp4">
			</video> -->
			</div>

			<div class="welcome-view__pseudo-elements">
			
				<div class="locations-wrapper">
					<!-- <div class="krkloc"></div>
					<div class="ldnloc"></div> -->

					<p class="realtalk">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam dignissimos rem rerum adipisci porro consequuntur?
					</p>

					<div class="continer centerIt">

						<div class="counter">
							<div class="days">
							<div class="value font-outline">00</div>
							<span>Days</span>
							</div>

							<div class="hours">
							<div class="value font-outline">00</div>
							<span>Hours</span>
							</div>

							<div class="minutes">
							<div class="value font-outline">00</div>
							<span>Minutes</span>
							</div>

							<div class="seconds">
							<div class="value font-outline">00</div>
							<span>Seconds</span>
							</div>

						</div>

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