import axios from "axios";
import React, { useState } from "react";
import SATURN from "../../../../../assets/images/saturn.png";
import * as style from "../../style";

const Saturn = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Saturn");

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
	getPlanetData("saturne");

	return (
		<>
			<style.Section id="saturn">
				<style.Planet_Container>
					<style.Planet>
						<style.Img src={SATURN} alt="saturn" />

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
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</style.Api_Link>
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
						<style.Info_Headline>No one knows how old Saturn's rings are</style.Info_Headline>
						<style.Info_Text>
							<p>There's a field of ice and rock debris circling Saturn that from afar, appear as rings.</p>
							<br />
							<p>
								Early telescope observations of the planet in the 1600s caused some confusion: does that planet have ears, or
								moons, or what?
							</p>
							<p>
								With better resolution, however, it soon became clear that there was a chain of small bodies encircling the
								gas giant.
							</p>
							<br />
							<p>It's possible that a single moon tore apart under Saturn's strong gravity and produced the rings.</p>
							<p>
								Or, maybe they've been around (pun intended) for the last few billion years, unable to coalesce into a larger
								body but resistant enough to gravity not to break up.
							</p>
						</style.Info_Text>
						<style.Info_Container_Underline />
					</style.Info_Container_Div>
				</style.Info_Container>
			</style.Section>
		</>
	);
};

export default Saturn;
