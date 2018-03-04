import React from "react"
import { createStore, combineReducers } from "redux"
import { Provider, connect } from "react-redux"

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import "jquery"
import "popper.js"
import "bootstrap/dist/js/bootstrap.min"

import $ from "jquery"

import v4 from "uuid/v4"

// ============
// actionTypes
// ============
const NEW_ARTICLE = "NEW_ARTICLE"
const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER"
const TOGGLE_PUBLISH = "TOGGLE_PUBLISH"

// ==============
// actionCreators
// ==============
const newArticle = title => ({
	type: NEW_ARTICLE,
	id: v4(),
	title,
})

const togglePublish = id => ({
	type: TOGGLE_PUBLISH,
	id,
})

const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter,
})

// ========
// reducers
// ========
const article = (state, action) => {
	switch (action.type) {
	case NEW_ARTICLE:
		return {
			id: action.id,
			title: action.title,
			published: false,
		}
	case TOGGLE_PUBLISH:
		if (state.id !== action.id) {
			return state
		}
		return {
			...state,
			published: !state.published,
		}
	default:
		return state
	}
}

const articles = (state = [], action) => {
	switch (action.type) {
	case NEW_ARTICLE:
		return [
			...state,
			article(undefined, action),
		]
	case TOGGLE_PUBLISH:
		return state.map(a => article(a, action))
	default:
		return state
	}
}

const visibilityFilter = (state = "SHOW_ALL", action) => {
	switch (action.type) {
	case SET_VISIBILITY_FILTER:
		return action.filter
	default:
		return state
	}
}

const articleApp = combineReducers({
	articles,
	visibilityFilter,
})

// =========
// selectors
// =========
const getVisibleArticles = (articles, filter) => {
	switch (filter) {
	case "SHOW_ALL":
		return articles
	case "SHOW_PUBLISHED":
		return articles.filter(a => a.published)
	case "SHOW_DRAFT":
		return articles.filter(a => !a.published)
	default:
		return articles
	}
}

// ==========
// containers
// ==========
const ArticleTitle = ({ onClick, published, title }) => (
	<span
		onClick={onClick}
		style={{
			textDecoration: published === true ? "line-through" : "none",
		}}
	>
		{title}
	</span>
)

const ArticleList = ({ articles, onArticleClick }) => (
	<ul className="list-unstyled">
		{
			articles.map(a => (
				<li key={a.id}>
					<ArticleTitle
						{...a}
						onClick={() => onArticleClick(a.id)}
					/>
				</li>
			))
		}
	</ul>
)

const Link = ({ active, children, onClick }) => (
	<a
		href="/"
		className={`btn ${active ? "disabled" : ""}`}
		onClick={(e) => {
			e.preventDefault()
			onClick()
		}}
	>
		{children}
	</a>
)

let AddArticle = ({ dispatch }) => {
	let input
	return (
		<div>
			<input
				className="add-input"
				onKeyUp={(e) => {
					e.preventDefault()
					if (e.keyCode === 13) {
						$(".add-article").click()
					} // click .add-article button on "enter" key
				}}
				ref={(node) => {
					input = node
				}}
			/>
			<button
				className="add-article"
				onClick={() => {
					dispatch(newArticle(input.value))
					input.value = ""
				}}
			>
				Add Article
			</button>
		</div>
	)
}
AddArticle = connect()(AddArticle)
// will be the SAME as...
// AddArticle = connect(null, dispatch => ({ dispatch }))(AddArticle)
// or...
// AddArticle = connect(state => ({}), dispatch => ({ dispatch }))(AddArticle)

const mapStateToLinkProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter,
})
const mapDispatchToLinkProps = (dispatch, ownProps) => ({
	onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	},
})
const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

const Footer = () => (
	<p>
		Show:  {" "}
		<FilterLink
			filter="SHOW_ALL"
		>
			All
		</FilterLink>
		<FilterLink
			filter="SHOW_PUBLISHED"
		>
			Published
		</FilterLink>
		<FilterLink
			filter="SHOW_DRAFT"
		>
			Draft
		</FilterLink>
	</p>
)

const mapStateToArticleListProps = state => ({
	articles: getVisibleArticles(state.articles, state.visibilityFilter),
})
const mapDispatchToArticleListProps = dispatch => ({
	onArticleClick: id => dispatch(togglePublish(id)),
})
const VisibleArticleList = connect(
	mapStateToArticleListProps,
	mapDispatchToArticleListProps,
)(ArticleList)

const ArticleApp = () => (
	<div>
		<AddArticle />
		<VisibleArticleList />
		<Footer />
	</div>
)

// =====
// app
// =====
const App = () => (
	<Provider store={createStore(articleApp)}>
		<ArticleApp />
	</Provider>
)

export default App
