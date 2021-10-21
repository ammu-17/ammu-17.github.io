@extends('layouts.default')
@section('title','contact page')
@section('main-content')


<section class="contact">
  <div class="contact-header">
    <h2 id="co-text">Contact Me</h2>
    <h1 id="co-text">Reach out for a new project </h1>
  </div>
  
  <div class="contact-content">
    <div class="contact-form">
      <h3 id="form-title">Send me a message</h3>
    <form action="mailto:npeel3497@gmail.com" method="post" enctype="text/plain">
      <fieldset>
        <div class="form-field">
          <input name="name" type="text" id="name" placeholder="Your Name"></input>
        </div>
      <div class="form-field">
          <input name="email" type="email" id="email" placeholder="Your Email"></input>
        </div>
      <div class="form-field">
          <input name="Subject" type="text" id="subject" placeholder="Subject"></input>
        </div>
    <div class="form-field">
          <textarea name="message" type="text" id="message" placeholder="Your Message"></textarea>
        </div>
      </fieldset>
  <input id="form-btn" type="submit" value="send">
    </form>
</div>
  
    <div class="contact-info">
      <h3>Email Me At </h3>
      <a href="ammu@gmail.com"><p>ammu@gmail.com</p></a>
      <h3>Find Me On </h3>
      <div class="contact-links">
      <i class="fa fa-telegram w3-hover-opacity"></i>&emsp; <i class="fa fa-instagram w3-hover-opacity"></i>&emsp;<i class="fa fa-github w3-hover-opacity"></i>
 
      </div>
    </div>
    </div>
</section>

@stop