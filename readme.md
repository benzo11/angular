
<p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/d/total.svg" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/v/stable.svg" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://poser.pugx.org/laravel/framework/license.svg" alt="License"></a>
</p>

## About

In this aplication we use Laravel 5.4 as backend development and Angular 4.2.4 as frontend development.
It's simple project with REST technology.

## Used server packages
    - php 5.6 or above
    - node js 8.0.0
    - npm 5.0.3
    - scotchbox 3.0
    - vagrant
## Run application
In root folder there is Vagrant file configurations using scotchbox box.

    -vagrant up
    -vagrant ssh
    -go to angularapp folder
    -ng serve --poll=2000 --port 8080 --host 192.168.33.10
    
On 192.168.33.10 is laravel api
On 192.168.33.10:8080 is our angular website
    
## Laravel REST api

In root folder is complete Laravel project.

Example call : 
http://192.168.33.10/api/v1/orders

returns JSON array of objects of current orders (dummy)

## Angular admin

In directory Angularapp is complete angular project. 
Please be aware you need to run in that folder and run ng serve --poll=2000 --port 8080 --host 192.168.33.10