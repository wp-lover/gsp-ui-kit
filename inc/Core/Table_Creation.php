<?php

namespace GSP_UI_Kit\Core;



class Table_Creation
{
    private static $instance;
    private $suffix = '_gsp_ui_kit';

    public function run() {
        $this->signup_with_phone_otp();
    }

    public function get_table_name_signup_with_phone_otp(){
        return  'signup_with_phone_otp' . $this->suffix;
    }

    private function signup_with_phone_otp()
    {
        global $wpdb;
        $table_name = $wpdb->prefix . 'signup_with_phone_otp' . $this->suffix;


        $charset_collate = $wpdb->get_charset_collate();

        $sql = "CREATE TABLE $table_name (
            id MEDIUMINT(9) NOT NULL AUTO_INCREMENT,
            phone_number VARCHAR(25) NOT NULL UNIQUE,
            full_name VARCHAR(50) NOT NULL,
            date_of_birth DATETIME NULL,
            one_time_otp  VARCHAR(10) NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            PRIMARY KEY (id)
        ) $charset_collate;";
        

        // Include the WordPress upgrade file to use dbDelta
        require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

        // Execute the SQL query
        dbDelta($sql);
    }

    public static function get_instance() : Table_Creation {

        if (self::$instance == null) {
            self::$instance = new Table_Creation();
        }

        return self::$instance;
    }
}
