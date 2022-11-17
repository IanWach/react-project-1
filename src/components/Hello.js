import React from 'react'

const users = [
	{id: '1', firstName: 'Lux', lastName: 'Academy' },
	{id: '2', firstName: 'React', lastName: 'JS'},
  ];
export default function Hello() {
	return(
		<div>
			<h1>Hello Conditional Rendering</h1>
			<List list={users} />
		</div>
	);
}
	function List(list){
		if (!list){
			return null;
		}
		return (
			<ul>
				{list.map(item =>(
				  <Item key={item.id} item={item} />
				))}
			</ul>
		);
	}
	function Item(item){
		return (
			<li>
				{item.firstName} {item.lastName}
			</li>
		);
		}