// Types
import type { SVGComponentProps } from "../../types/Types"
// Styles
import "./SVGStyling.scss"

const WorkExperienceSVG = ({ absolute }: SVGComponentProps) => {
	return absolute ? (
		<div className="heading__icon ">
			<svg width="30px" height="30px" viewBox="0 0 54 54">
				<title>Work Experience Icon</title>
				<circle cx="27" cy="27" r="26" />
				<path
					transform="translate(11,11)"
					d="M30 5.983h-7.987V4.045c0-1.655-1.345-3-3-3h-6.015c-1.655 0-3 1.345-3 3v1.938H2.001C.9 5.983 0 6.883 0 7.982V28.953c0 1.1.9 2.001 2 2.001h28c1.099 0 2-.9 2-2V7.981a2.008 2.008 0 0 0-2-1.999zM12 4.045c0-.551.447-1 1-1h6.011c.55 0 1 .447 1 1v1.938H12V4.045zM2 7.982h28v7.008H18.986v-1.025c0-1.101-.897-2-1.998-2h-1.993c-1.101 0-2 .897-2 2v1.025H2V7.982zm14.989 11.02h-1.993v-5.037h1.993v5.037zM2 28.951V16.988h10.997V19c0 1.102.897 2 2 2h1.99a2.002 2.002 0 0 0 2-2v-2.01h11.011v11.963H2.001z"
				/>
			</svg>
		</div>
	) : (
		<svg width="30px" height="30px" viewBox="0 0 54 54">
			<title>Work Experience Icon</title>
			<circle cx="27" cy="27" r="26" />
			<path
				transform="translate(11,11)"
				d="M30 5.983h-7.987V4.045c0-1.655-1.345-3-3-3h-6.015c-1.655 0-3 1.345-3 3v1.938H2.001C.9 5.983 0 6.883 0 7.982V28.953c0 1.1.9 2.001 2 2.001h28c1.099 0 2-.9 2-2V7.981a2.008 2.008 0 0 0-2-1.999zM12 4.045c0-.551.447-1 1-1h6.011c.55 0 1 .447 1 1v1.938H12V4.045zM2 7.982h28v7.008H18.986v-1.025c0-1.101-.897-2-1.998-2h-1.993c-1.101 0-2 .897-2 2v1.025H2V7.982zm14.989 11.02h-1.993v-5.037h1.993v5.037zM2 28.951V16.988h10.997V19c0 1.102.897 2 2 2h1.99a2.002 2.002 0 0 0 2-2v-2.01h11.011v11.963H2.001z"
			/>
		</svg>
	)
}
export default WorkExperienceSVG
