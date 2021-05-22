<?php
/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* register my menus */
function register_my_menus() {
  register_nav_menus(
    array(
      'header-menu' => __( 'Header Menu' ),
      'footer-menu' => __( 'Footer Menu' )
    )
  );
}
add_action( 'init', 'register_my_menus' );

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* widgets areas */
function emcartaz_widgets_init() {
	

	
	// Area 1, located at the top of the sidebar.
	register_sidebar( array(
		'name' => __( 'Sidebar nos Posts', 'emcartaz' ),
		'id' => 'sidebar-posts-widget-area',
		'description' => __( 'Adicione os blocos para a sidebar nos Posts.', 'emcartaz' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<div class="block-title"><h3 class="widget-title"><span>',
		'after_title' => '</span></h3></div>',
	) );

	// Area 2, located at the top of the sidebar.
	register_sidebar( array(
		'name' => __( 'Sidebar nas Paginas', 'emcartaz' ),
		'id' => 'sidebar-pages-widget-area',
		'description' => __( 'Adicine os blocos para a sidebar nas Paginas.', 'emcartaz' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<div class="block-title"><h3 class="widget-title"><span>',
		'after_title' => '</span></h3></div>',
	) );
	
	
	// Area 3, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'Footer First', 'emcartaz' ),
		'id' => 'first-footer-widget-area',
		'description' => __( 'Bloco 1 no Footer.', 'emcartaz' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<div class="block-title"><h4 class="widget-title"><span>',
		'after_title' => '</span></h4></div>',
	) );

	// Area 4, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'Footer Second', 'emcartaz' ),
		'id' => 'second-footer-widget-area',
		'description' => __( 'Bloco 2 no Footer.', 'emcartaz' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<div class="block-title"><h4 class="widget-title"><span>',
		'after_title' => '</span></h4></div>',
	) );

	// Area 5, located in the footer. Empty by default.
	register_sidebar( array(
		'name' => __( 'Footer Third', 'emcartaz' ),
		'id' => 'third-footer-widget-area',
		'description' => __( 'Bloco 3 no Footer.', 'emcartaz' ),
		'before_widget' => '<li id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</li>',
		'before_title' => '<div class="block-title"><h4 class="widget-title"><span>',
		'after_title' => '</span></h4></div>',
	) );
	
	// Area 6, located in the Header. Empty by default.
	register_sidebar( array(
		'name' => __( 'Header Banner Big', 'emcartaz' ),
		'id' => 'banner-big-header-widget-area',
		'description' => __( 'Banner Big no Header.', 'emcartaz' ),
		'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<div class="block-title"><span>',
		'after_title' => '</span></div>',
	) );	
	// Area 7, located in the Header. Empty by default.
	register_sidebar( array(
		'name' => __( 'Header Banner Small', 'emcartaz' ),
		'id' => 'banner-small-header-widget-area',
		'description' => __( 'Banner Small no Header.', 'emcartaz' ),
		'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<div class="block-title"><span>',
		'after_title' => '</span></div>',
	) );

		
	// Area HOME, located at the top of the sidebar.
	/*
	register_sidebar( array(
		'name' => __( 'Content Home', 'emcartaz' ),
		'id' => 'content-home-widget-area',
		'description' => __( 'Adicione os blocos para o conteudo da home', 'emcartaz' ),
		'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<div class="block-title"><h3 class="widget-title"><span>',
		'after_title' => '</span></h3></div>',
	) );
	*/
	
	
	// Area 8, located in the Home. Empty by default.
	/*
	register_sidebar( array(
		'name' => __( 'Home Banner Slider Bottom', 'emcartaz' ),
		'id' => 'banner-home-region1-widget-area',
		'description' => __( 'Bloco para Banner abaixo do Slider da Home.', 'emcartaz' ),
		'before_widget' => '<div id="%1$s" class="widget-container %2$s">',
		'after_widget' => '</div>',
		'before_title' => '<div class="block-title"><span>',
		'after_title' => '</span></div>',
	) );
	*/

}
/** Register sidebars by running emcartaz_widgets_init() on the widgets_init hook. */
add_action( 'widgets_init', 'emcartaz_widgets_init' );


/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/** adiciona a categoria na class da tag <body>
	* from http://codex.wordpress.org/Function_Reference/body_class 
*/
// add category nicenames in body and post class
function category_id_class( $classes ) {
	global $post;
	foreach ( get_the_category( $post->ID ) as $category ) {
		$classes[] = 'category-'. $category->category_nicename;
	}
	return $classes;
}
add_filter( 'post_class', 'category_id_class' );


function body_category_id_class( $classes ) {
	global $post;

	foreach ( get_the_category( $post->ID ) as $category ) {
		$classes[] = 'body-category-'. $category->category_nicename;
	}
	return $classes;

}
add_filter( 'body_class', 'body_category_id_class' );



/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/** exclui a categoria Featured	
  * adiciona class no links
**/
function emcartaz_categorias($separator) {
  $first_time = 1;
  foreach((get_the_category()) as $category) {
    if ($category->cat_name != 'Featured' && $category->cat_name != 'Destaques') {
      if ($first_time == 1) {
        echo '<a href="' . get_category_link( $category->term_id ) . '" class="categoria-'.$category->term_id .' categoria-'. $category->slug .'" title="' . sprintf( __( "Ver todos os posts em %s" ), $category->name ) . '" ' . '>'  . $category->name.'</a>';
        $first_time = 0;
      } 
			else {
        echo $separator . '<a href="' . get_category_link( $category->term_id ) . '" class="categoria-'.$category->term_id .' categoria-'. $category->slug .'" title="' . sprintf( __( "Ver todos os posts em %s" ), $category->name ) . '" ' . '>' . $category->name.'</a>';
      }
    }
  }
}

//---------------------------------------------------------------------------------------------------------------------------------------------
// Desabilita os tamanhos padrão de imagem do Wordpress (10/2017)

function add_image_insert_override( $sizes ){
    unset( $sizes[ 'thumbnail' ]);
    unset( $sizes[ 'medium' ]);
    unset( $sizes[ 'medium_large' ] );
    unset( $sizes[ 'large' ]);
    unset( $sizes[ 'full' ] );
    return $sizes;
}
add_filter( 'intermediate_image_sizes_advanced', 'add_image_insert_override' );

//---------------------------------------------------------------------------------------------------------------------------------------------

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/** Adiciona outros tamanhos de imagens no painel
*/
add_action( 'after_setup_theme', 'setup' );
function setup() {
    // ...
     
    //add_theme_support( 'post-thumbnails' ); // This feature enables post-thumbnail support for a theme
    // To enable only for posts:
    //add_theme_support( 'post-thumbnails', array( 'post' ) );
    // To enable only for posts and custom post types:
    //add_theme_support( 'post-thumbnails', array( 'post', 'movie' ) );
     
    // Register a new image size.
    // This means that WordPress will create a copy of the post image with the specified dimensions
    // when you upload a new image. Register as many as needed.
    // Adding custom image sizes (name, width, height, crop)
	  
		//add_image_size( 'imagem-slider', 760, 420, array( 'center', 'top' ) );
		//add_image_size( 'imagem-quadrada', 200, 200, array( 'center', 'top' ) );
		add_image_size( 'imagem-vertical', 450 );		  
		  
    // ...
}
add_filter( 'image_size_names_choose', 'custom_image_sizes_choose' );
function custom_image_sizes_choose( $sizes ) {
    $custom_sizes = array(
        //'imagem-slider' => 'Slider',
        //'imagem-quadrada' => 'Quadrada',
	'imagem-vertical' => 'Vertical'
    );
    return array_merge( $sizes, $custom_sizes );
}

/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* Altera os resultados da busca por data */
function my_search_query( $query ) {
	// not an admin page and is the main query
	if ( !is_admin() && $query->is_main_query() ) {
		if ( is_search() ) {
			$query->set( 'orderby', 'date' );
		}
	}
}
add_action( 'pre_get_posts', 'my_search_query' );


/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* add new post type (VIDEO, PROMO) in Admin WP */
/* http://codex.wordpress.org/Post_Types */

add_action( 'init', 'create_post_type' );
function create_post_type() {
  register_post_type( 'video',
    array(
      'labels' => array(
        'name' => __( 'V&iacute;deos' ),
        'singular_name' => __( 'V&iacute;deos' )
      ),
	  'public' => true,
	  'show_in_rest' => true,
      'has_archive' => true,
			'supports' => array( 'title', 'editor', 'excerpt' ),
    )
  );
	register_post_type( 'promo',
    array(
      'labels' => array(
        'name' => __( 'Promo&ccedil;&otilde;es' ),
        'singular_name' => __( 'Promo&ccedil;&otilde;es' )
      ),
	  'public' => true,
      'show_in_rest' => true,
      'has_archive' => true,
			'supports' => array( 'title', 'editor', 'comments', 'excerpt', 'custom-fields', 'thumbnail' ),
    )
  );
}


/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/**
 * Recent_Posts widget class
 *
 * @since 2.8.0
 */
class emcartaz_Widget_Recent_Posts extends WP_Widget {

    function __construct() {
        $widget_ops = array('classname' => 'widget_recent_entries', 'description' => __( "The most recent posts on your site") );
        parent::__construct('recent-posts', __('Recent Posts'), $widget_ops);
        $this->alt_option_name = 'widget_recent_entries';

        add_action( 'save_post', array($this, 'flush_widget_cache') );
        add_action( 'deleted_post', array($this, 'flush_widget_cache') );
        add_action( 'switch_theme', array($this, 'flush_widget_cache') );
    }

    function widget($args, $instance) {
        $cache = wp_cache_get('widget_recent_posts', 'widget');

        if ( !is_array($cache) )
            $cache = array();

        if ( ! isset( $args['widget_id'] ) )
            $args['widget_id'] = $this->id;

        if ( isset( $cache[ $args['widget_id'] ] ) ) {
            echo $cache[ $args['widget_id'] ];
            return;
        }

        ob_start();
        extract($args);

        $title = ( ! empty( $instance['title'] ) ) ? $instance['title'] : __( 'Recent Posts' );
        $title = apply_filters( 'widget_title', $title, $instance, $this->id_base );
        $number = ( ! empty( $instance['number'] ) ) ? absint( $instance['number'] ) : 10;
        if ( ! $number )
            $number = 10;
        $show_date = isset( $instance['show_date'] ) ? $instance['show_date'] : false;

        $r = new WP_Query( apply_filters( 'widget_posts_args', array( 'posts_per_page' => $number, 'no_found_rows' => true, 'post_status' => 'publish', 'ignore_sticky_posts' => true ) ) );
        if ($r->have_posts()) :
				?>
        <?php echo $before_widget; ?>
				
        <?php if ( $title ) echo $before_title . $title . $after_title; ?>
        <div class="block row">
        <?php while ( $r->have_posts() ) : $r->the_post(); ?>
					<div class="item-post">
						<?php 
						
						if ( function_exists( 'get_the_image' ) ) {
							$image = get_the_image(array('echo'=>false));
							if( ! empty ( $image ) ) {
									// do something with the image
									echo '<div class="col-xs-3 col-sm-4 col-lg-4"><div class="imagem">';
									$image = get_the_image( array( 'meta_key' => 'thumbnail', 'size' => 'thumbnail' ) );
									echo '</div></div>';

							} else {
									// do something if there is no image
									echo '<div class="col-xs-3 col-sm-4 col-lg-4"><div class="imagem">';
									echo '<img src="';
									echo bloginfo('template_url');
									echo '/images/no-image.png" alt="imagem n&atil;deo dispon&iacute;vel" class="no-image" />';
									echo '</div></div>';
							}
						}
						
						?>
						<div class="col-xs-9 col-sm-8 col-lg-8">	
							<div class="storycontent">
								<div class="metapost"><?php edit_post_link('Editar'); ?></div>
								<?php if ( $show_date ) : ?>
								<div class="date"><?php the_time(get_option('date_format')); //the_date("D, d M Y"); ?></div>
								<?php endif; ?>
								<h2 class="post-title"><a href="<?php the_permalink() ?>" rel="bookmark" title="<?php echo esc_attr( get_the_title() ? get_the_title() : get_the_ID() ); ?>"><?php if ( get_the_title() ) the_title(); else the_ID(); ?></a></h2>
								<div class="excerpt clearfix">		
									<?php the_excerpt(__('(more...)')); ?>									
								</div>
							</div>
						</div>
						<div class="clearfix"></div>
					</div>
        <?php endwhile; ?>
        </div>
        <?php echo $after_widget; ?>
				
				<?php
        // Reset the global $the_post as this query will have stomped on it
        wp_reset_postdata();

        endif;

        $cache[$args['widget_id']] = ob_get_flush();
        wp_cache_set('widget_recent_posts', $cache, 'widget');
    }

    function update( $new_instance, $old_instance ) {
        $instance = $old_instance;
        $instance['title'] = strip_tags($new_instance['title']);
        $instance['number'] = (int) $new_instance['number'];
        $instance['show_date'] = (bool) $new_instance['show_date'];
        $this->flush_widget_cache();

        $alloptions = wp_cache_get( 'alloptions', 'options' );
        if ( isset($alloptions['widget_recent_entries']) )
            delete_option('widget_recent_entries');

        return $instance;
    }

    function flush_widget_cache() {
        wp_cache_delete('widget_recent_posts', 'widget');
    }

    function form( $instance ) {
        $title     = isset( $instance['title'] ) ? esc_attr( $instance['title'] ) : '';
        $number    = isset( $instance['number'] ) ? absint( $instance['number'] ) : 5;
        $show_date = isset( $instance['show_date'] ) ? (bool) $instance['show_date'] : false;
?>
        <p><label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:' ); ?></label>
        <input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo $title; ?>" /></p>

        <p><label for="<?php echo $this->get_field_id( 'number' ); ?>"><?php _e( 'Number of posts to show:' ); ?></label>
        <input id="<?php echo $this->get_field_id( 'number' ); ?>" name="<?php echo $this->get_field_name( 'number' ); ?>" type="text" value="<?php echo $number; ?>" size="3" /></p>

        <p><input class="checkbox" type="checkbox" <?php checked( $show_date ); ?> id="<?php echo $this->get_field_id( 'show_date' ); ?>" name="<?php echo $this->get_field_name( 'show_date' ); ?>" />
        <label for="<?php echo $this->get_field_id( 'show_date' ); ?>"><?php _e( 'Display post date?' ); ?></label></p>
<?php
    }
}

function emcartaz_register_custom_widgets() {
    register_widget( 'emcartaz_Widget_Recent_Posts' );
}
add_action( 'widgets_init', 'emcartaz_register_custom_widgets' );



/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------------------------------------------------------------------------- */
/* from: http://www.wpbeginner.com/wp-tutorials/how-to-track-popular-posts-by-views-in-wordpress-without-a-plugin/ */

/* conta os posts lidos */


function wpb_set_post_views($postID) {
    $count_key = 'wpb_post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    }else{
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}
remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0); 
function wpb_get_post_views($postID){
    $count_key = 'wpb_post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    if($count==''){
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return "0 View";
    }
    return $count.' Views';
}



/* -------------------------------------------------------------------------------------------------------------------------------------------- */

/* Load cForms scripts only on the contact page */	 

function deregister_cforms() {
		if (!is_page('contato')) {
				remove_action('wp_head','cforms_style');
		}
}
add_action( 'wp_print_scripts', 'deregister_cforms');

/* Load Postratings scripts only on single page */	 

add_action( 'wp_print_scripts', 'my_deregister_javascript', 100);
add_action( 'wp_print_styles', 'my_deregister_styles', 100);
function my_deregister_javascript() {
	 if (!is_single()) {
				wp_deregister_script( 'wp-postratings' );
		}
}
function my_deregister_styles() {
	 if (!is_single()) {
				wp_deregister_style( 'wp-postratings' );
		}
}



/* -------------------------------------------------------------------------------------------------------------------------------------------- */


function emcartaz_init() {
	add_filter('comment_form_defaults','mytheme_comments_form_defaults');
}
add_action('after_setup_theme','emcartaz_init');

function emcartaz_comments_form_defaults($default) {
	unset($default['comment_notes_after']);
	return $default;
}


?>
