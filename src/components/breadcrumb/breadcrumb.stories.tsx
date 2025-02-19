import { Story, Meta } from '@storybook/react';
import Breadcrumb, { BreadcrumbProps } from '.';

export default {
	title: 'Components/Breadcrumb',
	component: Breadcrumb
} as Meta;

const options = {
	items: [
		{ to: 'https://www.google.com', label: 'Google' },
		{ to: 'https://facebook.com', label: 'Facebook' },
		{ to: 'https://twitter.com', label: 'Twitter' }
	]
};
const Template: Story<BreadcrumbProps> = (args) => (
	<Breadcrumb {...args}>
		{options.items.map(({ to, label }) => {
			return (
				<div key={to} className=''>
					<a href={to}>{label}</a>
				</div>
			);
		})}
	</Breadcrumb>
);

export const Default = Template.bind({});

Default.args = {
	separator: '/'
};
