function MyButton() {
	return (
		<button>
			Je suis un boutton
		</button>
	)
}

function AboutPage() {
	return (
		<div>
			<h1>
				About
			</h1>
			<p>
				Hello there. <br/>How are you doing ?
			</p>
		</div>
	)
}




function App() {

  return (
	<div>
		<h1>
			Welcome to my app
		</h1>
		<MyButton />
		<AboutPage />
	</div>
  )
}

export default App
