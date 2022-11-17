import React from 'react'
import '../Effect.css'

export default function Slide() {
	const FarmAnimals = [
		'Cow','Chicken','Pig','Sheep','Goat','Horse'
	]
	const Animal = FarmAnimals.map((FarmAnimal, index) => <li>{index+1}.{"The index "}{index}{" is a "}{FarmAnimal}</li>)

	return(
		<div className='list-items'>
			<ul className='list'>
				{Animal}
			</ul>
		</div>
	)
}
//   return (
// 	<Slide>
//     	<div key={index}>

//     	</div>
//     </Slide>
//   )