import Vue, { VNode } from 'vue';

declare global {
	declare module '*.scss' {
		export default any;
	}

	declare module '*.json' {
		const value: any;
		export default value;
	}

	declare module '*.vue' {
		import Vue from 'vue';
		export default Vue;
	}

	namespace JSX {
		// tslint:disable no-empty-interface
		interface Element extends VNode { }
		// tslint:disable no-empty-interface
		interface ElementClass extends Vue { }

		interface ElementAttributesProperty {
			$props: {};
		}
		interface IntrinsicElements {
			[elem: string]: any;
		}
		interface IntrinsicAttributes {
			[elem: string]: any;
		}
	}
}