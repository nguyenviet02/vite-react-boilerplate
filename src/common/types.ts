import type {
	ReactElement,
	PropsWithoutRef,
	SVGProps,
	RefAttributes,
	FC,
} from "react";

export type FunctionComponent = ReactElement | null;

type HeroIconSVGProps = PropsWithoutRef<SVGProps<SVGSVGElement>> &
	RefAttributes<SVGSVGElement>;
type IconProps = HeroIconSVGProps & {
	title?: string;
	titleId?: string;
};
export type Heroicon = FC<IconProps>;
