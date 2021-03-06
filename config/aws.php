<?php

return [
    'credentials' => [
        'key'    => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
    ],
    'region' => env('AWS_REGION'),
    'bucket' => env('AWS_PUBLIC_BUCKET'),
    'private_bucket' => env('AWS_PRIVATE_BUCKET'),
    'cloudfront_private_key_file' => env('AWS_CLOUDFRONT_PRIVATE_KEY_FILE'),
    'cloudfront_public_key' => env('AWS_CLOUDFRONT_PUBLIC_KEY'),
    'cloudfront_public_url' => env('AWS_PUBLIC_CLOUDFRONT_URL'),
    'cloudfront_private_url' => env('AWS_PRIVATE_CLOUDFRONT_URL'),

    'version' => 'latest',

//    // You can override settings for specific services
//    'Ses' => [
//        'region' => 'us-east-1',
//    ],
];
