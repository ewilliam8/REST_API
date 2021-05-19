<?php

function getPosts ($connect) {
    $posts = mysqli_query($connect, "SELECT * FROM `posts`");
    $postsList = [];
    while($post = mysqli_fetch_assoc($posts)) {
        $postsList[] = $post;
    }
    echo json_encode($postsList);
}


function getPost($connect, $id) {
    $post = mysqli_query($connect, "SELECT * FROM `posts` WHERE `id` = '$id'");
    $post = mysqli_fetch_assoc($post);
    echo json_encode($post);
}