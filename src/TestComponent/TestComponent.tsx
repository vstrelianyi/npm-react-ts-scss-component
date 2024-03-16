import React from 'react';
import styles from './TestComponent.module.scss';
import classNames from 'classnames';

interface TestComponentProps {
	message: string;
	className?: string;
}

const TestComponent: React.FC<TestComponentProps> = ( { message, className } ) => {
	return (
		<div
			className={ classNames( [
				styles.TestComponent,
				className,
				'bg-black'
			 ] ) }
		>
			<h1>{ message }</h1>
		</div>
	);
}

export default TestComponent;