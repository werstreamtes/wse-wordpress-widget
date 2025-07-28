<?php

if (!defined("ABSPATH")) exit; // Exit if accessed directly

define("WERSTREAMTES_URL", plugins_url("/", __FILE__));

/**
 * Author: WerStreamt.es
 * Plugin Name: WerStreamt.es? Widget
 * Plugin URI: https://www.werstreamt.es/developers/widget/
 * Description: Mit dem Widget kannst du Verfügbarkeitsinformationen zu Filmen, Serien und Listen direkt auf deiner Webseite anzeigen.
 * Short Description: Zeige Verfügbarkeitsinformationen zu Filmen, Serien und Listen auf deiner Webseite an.
 * Requires at least: 6.1
 * Requires PHP: 7.0
 * Version: 0.1.3
 * Tested up to: 6.6
 * License: GPL-2.0-or-later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: werstreamt-es-widget
 *
 * @package widget/werstreamtes
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets, so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function werstreamtes_widget_block_init(): void
{
    register_block_type(__DIR__ . "/build");
}

/**
 *
 * @return void
 */
function werstreamtes_widget_enqueue_script()
{

    if (!has_block("widget/werstreamtes")) {
        return;
    }

    wp_enqueue_script("wse-widget-list-script", "https://www.werstreamt.es/_resources/themes/wse/js/list-widget.js", [], "1.0.0", ["in_footer" => true]);

    $partnerToken = get_option("werstreamtes_widget_partner_token");
    $script = 'let wsePartnerToken = ' . ($partnerToken ? "\"" . esc_js($partnerToken) . "\"" : "null") . ';
        document.querySelectorAll(".wse-widget-container").forEach(item => {
            item.setAttribute("data-partner", wsePartnerToken);
            item.setAttribute("style", "min-height: " + (item.getAttribute("data-limit") * 118) + "px");
        });';

    wp_add_inline_script("wse-widget-list-script", $script, "before");

}

/**
 * This function registers a setting for the WerStreamt.es widget.
 *
 * @return void
 */
function werstreamtes_widget_register_settings(): void
{

    register_setting(
        "werstreamtes_widget_settings",
        "werstreamtes_widget_partner_token",
        [
            "sanitize_callback" => "sanitize_text_field",
            "default" => "",
            "show_in_rest" => true,
            "type" => "string",
        ]
    );
}

/**
 * This function defines an options page for the "WerStreamt.es" widget.
 * The options page is accessible to users with the "manage_options" capability.
 *
 * @return void
 */
function werstreamtes_widget_settings_page(): void
{
    add_options_page(
        "WerStreamt.es Widget",
        "WerStreamt.es Widget",
        "manage_options",
        "werstreamtes",
        function () { ?>
            <div id="widget-werstreamtes-settings"></div>
            <?php
        }
    );
}

/**
 * This is a PHP function that is used to enqueue the necessary scripts and styles for the admin page of the
 * WerStreamt.es Widget.
 *
 * @return void
 */
function werstreamtes_widget_admin_scripts(): void
{
    $dir = __DIR__; // Set the directory path of the current file.

    $script_asset_path = "{$dir}/build/admin.asset.php"; // Set the path to the asset manifest file.
    if (!file_exists($script_asset_path)) { // Check if the asset manifest file exists.
        throw new Error(
            "You need to run `npm start` or `npm run build` for the \"werstreamtes\" block first."
        ); // Throw an error if the asset manifest file is not found.
    }

    $admin_js = "build/admin.js"; // Set the path to the admin JavaScript file.
    $script_asset = require($script_asset_path); // Load the asset manifest file.

    wp_enqueue_script(
        "widget-werstreamtes-admin-editor", // Set the handle for the admin editor script.
        plugins_url($admin_js, __FILE__), // Set the URL to the admin JavaScript file.
        $script_asset["dependencies"], // Set the script dependencies.
        $script_asset["version"], // Set the script version.
        ["in_footer" => true]
    );

    $admin_css = 'build/admin.css'; // Set the path to the admin CSS file.
    wp_enqueue_style(
        'widget-werstreamtes-admin', // Set the handle for the admin stylesheet.
        plugins_url($admin_css, __FILE__), // Set the URL to the admin CSS file.
        ['wp-components'], // Set the stylesheet dependencies.
        filemtime("$dir/$admin_css") // Set the stylesheet version based on the last modification time.
    );

}

/**
 * This function adds a settings link to the plugin page for the "WerStreamt.es" widget.
 *
 * @param array $links The existing plugin links.
 *
 * @return array The modified plugin links with the settings link added.
 */
function werstreamtes_widget_settings_link(array $links): array
{
    return array_merge($links, [
        sprintf("<a href=\"%s\">Einstellungen</a>", esc_url(admin_url("options-general.php?page=werstreamtes"))),
    ]);
}

// Initialize the block.
add_action("init", "werstreamtes_widget_block_init");
// Register available settings (e.g. partnerToken)
add_action("init", "werstreamtes_widget_register_settings", 10);
// Add an options page to the WordPress admin menu.
add_action("admin_menu", "werstreamtes_widget_settings_page", 10);
// Enqueues scripts and styles in the WordPress admin.
add_action("admin_enqueue_scripts", "werstreamtes_widget_admin_scripts", 10);
// Add a settings link to the plugin page for this plugin.
add_action("plugin_action_links_" . plugin_basename(__FILE__), "werstreamtes_widget_settings_link", 10);
// Create endpoint to get providers from WerStreamt.es
add_action("rest_api_init", "werstreamtes_widget_providersEndpoint");
// Enqueue list-widget script
add_action('wp_enqueue_scripts', 'werstreamtes_widget_enqueue_script');

/**
 *
 * @return void
 */
function werstreamtes_widget_providersEndpoint(): void
{
    // Register a new REST API route
    register_rest_route(
        "wse", // The namespace for the route
        "/getProviders", // The endpoint path
        [
            "methods" => "GET", // The HTTP method for the route
            "callback" => function () { // The function to call when this endpoint is accessed
                header("Content-Type: application/json; charset=utf-8");
                return json_decode(wp_remote_get("https://www.werstreamt.es/widgets/filter/providers/?v=2")["body"], true);
            },
            "permission_callback" => "__return_true" // A permission callback that allows anyone to access this endpoint
        ],
    );
}
