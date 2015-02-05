console.log('Main.js loaded!')

window.onload = function(){

	$('#getredditposts').on('click', function(event){ //when you click the get reddit posts button
		$.ajax({	//ajax request to reddit api to get top space posts from today
			url: 'http://www.reddit.com/r/space/top.json?t=day',
			type: 'GET',
			dataType: 'json'
		}).done(function(results){

			results['data']['children'].forEach(function(post) {	//runs through each result returned 
   			if (post['data']['domain'] == 'i.imgur.com'){ //checks if the post is that of an image

   				article = {title: post['data']['title'], img_url: post['data']['url']}

   				$.ajax({	//ajax post to add pending articles to the database...
						url: '/pending/create',
						type: 'POST',
						data: article
					})//close ajax call
   			}//close if 
		  })//close .for each
		  location.reload();
		})//close .done
	})//close on click function


	$('body').on('click', '#kill' ,function(event){ //when you click the kill button
		idtokill = {id: this.getAttribute("data-pic-id")}
		this.parentElement.remove()

		$.ajax({	//ajax post to add pending articles to the database...
			url: 'pending/destroy',
			type: 'POST',
			data: idtokill
		})//close ajax call
	})//close on click function 

}//close on load function 
