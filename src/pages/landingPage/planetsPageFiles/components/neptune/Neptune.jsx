import axios from "axios";
import React, { useState } from "react";
import NEPTUNE from "../../../../../assets/images/neptune.png";
import * as style from "../../style";

const Neptune = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Neptune");

	const [planetName, setPlanetName] = useState();
	const [avgTemp, setAvgTemp] = useState();
	const [gravity, setGravity] = useState();
	const [density, setDensity] = useState();

	const getPlanetData = (planet) => {
		axios
			.get(`https://api.le-systeme-solaire.net/rest/bodies/` + planet, (res) => {
				res.json();
			})
			.then((data) => {
				setPlanetName(data.data.englishName);
				setAvgTemp(data.data.avgTemp);
				setGravity(data.data.gravity);
				setDensity(data.data.density);
			});
	};
	getPlanetData("neptune");

	return (
		<>
			<style.Section id="neptune">
				<style.Planet_Container>
					<style.Planet>
						<style.Img src={NEPTUNE} alt="neptune" />

						<style.Api_Info_Absolute>{api}</style.Api_Info_Absolute>
						<style.Angled_Line />
					</style.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</style.Planet_Container>

				<style.Info_Container>
					<style.Info_Container_Div>
						<style.Api_Links>
							<style.Api_Link
								className={active === "temp" ? "active" : ""}
								onClick={() => {
									setApi((avgTemp - 273.15).toFixed(1) + " °C");
									setActive("temp");
								}}
							>
								Avg.Temp.
							</style.Api_Link>
							<style.Api_Link
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</style.Api_Link>
							<style.Api_Link
								className={active === "density" ? "active" : ""}
								onClick={() => {
									setApi(density.toFixed(2) + " g/cm³");
									setActive("density");
								}}
							>
								Density
							</style.Api_Link>
						</style.Api_Links>
						<style.Planet_Name>{planetName}</style.Planet_Name>
						<style.Info_Headline>Neptune has supersonic winds. </style.Info_Headline>
						<style.Info_Text>
							<p>
								While on Earth we are concerned about hurricanes, the strength of
								these storms is nowhere near what you would find on Neptune.
							</p>
							<p>
								At its highest altitudes, according to NASA, winds blow at more than
								1,100 miles per hour (1,770 kilometers per hour).
							</p>
							<p>
								To put that in context, that'style faster than the speed of sound on
								Earth, at sea level.
							</p>
							<br />
							<p>
								Why Neptune is so blustery is a mystery, especially considering the
								Sun'style heat is so little at its distance.
							</p>
						</style.Info_Text>
						<style.Info_Container_Underline />
					</style.Info_Container_Div>
				</style.Info_Container>
			</style.Section>
		</>
	);
};

export default Neptune;
