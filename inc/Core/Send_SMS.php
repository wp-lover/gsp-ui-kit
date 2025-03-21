<?php

namespace GSP_UI_Kit\Core;


if (!defined('ABSPATH')) exit;

class Send_SMS
{

    public static function send_sms($phone_number, $message)
    {

        // make API request for send SMS to user's phone number
        $response = wp_remote_post('http://bulksmsbd.net/api/smsapi', [
            'body' => [
                'api_key' => 'gonNyAuvBUDQjX9c8dJN',
                'type'   => 'text', // text or unicode
                'number' => $phone_number,  // phone number
               'senderid'   => '8809617624832', // sender id   
                'message' => $message // message
            ]
        ]);

        return $response;

    }

}