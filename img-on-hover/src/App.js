// @flow

import React from "react"

import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

import "./App.scss"

const App = () => (
	<div>
		<div className="my-img-wrapper">
			<div
				className="my-img d-flex justify-content-center align-items-center"
			>
				<h3 className="my-img-text">Hovered, hell yeah!</h3>
			</div>
		</div>
	</div>
)

export default App
