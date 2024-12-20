<?php

if (!defined('ABSPATH')) exit; // Exit if accessed directly

if (isset($attributes["filterUrl"])) {
    ?>
    <div class="wp-block-widget-werstreamtes">
        <div
                class="wse-widget-container"
                data-numbers="<?php echo esc_attr(isset($attributes["showNumbers"]) && $attributes["showNumbers"] === true ? "true" : "false"); ?>"
                data-hideEntryWithoutProvider="<?php echo esc_attr($attributes["hideEntryWithoutProvider"] ?? "false"); ?>"
                data-style="<?php echo esc_attr($attributes["style"] ?? "single"); ?>"
                data-limit="<?php echo esc_attr($attributes["limit"] ?? 10); ?>"
                data-filter-url="<?php echo esc_attr($attributes["filterUrl"]); ?>"
                data-providers="<?php echo esc_attr($attributes["selectedProviders"] ?? ""); ?>">
            <div class="wse-loading">
                <img src="<?php echo esc_attr(WERSTREAMTES_URL . "assets/WerStreamtEs.svg"); ?>"
                     alt="WerStreamt.es?" loading="lazy"/>
                Daten werden geladen...
            </div>
        </div>
    </div>
    <?php
}