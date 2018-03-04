import React, { Component } from "react"
import $ from "jquery"

export default class App extends Component {
	componentDidMount() {
		// Vanilla JS
		navigator.geolocation.getCurrentPosition((pos) => {
			$(".vanilla").html(`
				<p>Latitude: ${pos.coords.latitude}</p>
				<p>Longitude: ${pos.coords.longitude}</p>
				<p>Accuracy: ${pos.coords.accuracy}</p>
			`)
		})
		// jQuery
		$.getJSON("http://api.wipmania.com/jsonp?callback=?", (data) => {
			$(".jquery").html(`
				<p>Latitude: ${data.latitude}</p>
				<p>Longitude: ${data.longitude}</p>
				<p>Country: ${data.address.country}</p>
				<p>Country Code: ${data.address.country_code}</p>
				<p>Continent: ${data.address.continent}</p>
				<p>Continent Code: ${data.address.continent_code}</p>
			`)
		})
	}
	render() {
		return (
			<div>
				<h3>Vanilla JS</h3>
				<div className="vanilla" />
				<h3>jQuery</h3>
				<div className="jquery" />
			</div>
		)
	}
}
// navigator.geolocation.getCurrentPosition((pos) => {
// 	console.log(pos.coords.latitude, pos.coords.longitude, pos.coords.accuracy)
// }, null)
//
// $.getJSON('http://api.wipmania.com/jsonp?callback=?', function (data) {
//   alert('Latitude: ' + data.latitude +
//         '\nLongitude: ' + data.longitude +
//         '\nCountry: ' + data.address.country);
// });
