<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package _s
 */

?>

	</div><!-- #content -->

	<footer id="colophon" class="site-footer">
		<div class="site-info">

			<div class="site-footer__pseudo-elements">
				
				<div class="moovement"></div>

			</div>

			<div class="social-media">
				<!-- <div class="social-media__follow font-outline">Follow</div>
				<div class="social-media__us font-outline">Twentdawg</div> -->
				<div class="social-media__icons">
					<div class="instagram"></div>
					<div class="facebook"></div>
					<div class="youtube"></div>
				</div>
			</div>

			<div class="copyrights">
			<span><?php echo footer_copyright(); ?> Copyright © <?php echo get_bloginfo( 'name' ); ?> All rights reserved. Created by soulo.fo & saiyan161</span>
			</div>

		</div><!-- .site-info -->
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
