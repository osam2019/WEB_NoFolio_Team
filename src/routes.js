import Editor from './editor/Main.vue';
import Dashboard from './dashboard/Main.vue';
import Test from './test/Main.vue';
import ShareEditor from './test/ShareEditor.vue';

export default [
	{ path: '/editor', component: Editor },
	{ path: '/dashboard', component: Dashboard },
	{ 
		path: '/test',
		component: Test,
		children: [
			{path: 'shareeditor', component: ShareEditor }
		]
	},
	{
		path: '/assets',
	}
];