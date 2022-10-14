import axios from "axios";
import React, { useState } from "react";
import SATURN from "../../../../../assets/images/saturn.png";
import * as s from "../../style";

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
			<s.Section id="saturn">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={SATURN} alt="saturn" />

						<s.Api_Info_Absolute>{api}</s.Api_Info_Absolute>
						<s.Angled_Line />
					</s.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</s.Planet_Container>

				<s.Info_Container>
					<s.Info_Container_Div>
						<s.Api_Links>
							<s.Api_Link
								className={active === "temp" ? "active" : ""}
								onClick={() => {
									setApi((avgTemp - 273.15).toFixed(1) + " °C");
									setActive("temp");
								}}
							>
								Avg.Temp.
							</s.Api_Link>
							<s.Api_Link
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</s.Api_Link>
							<s.Api_Link
								className={active === "density" ? "active" : ""}
								onClick={() => {
									setApi(density.toFixed(2) + " g/cm³");
									setActive("density");
								}}
							>
								Density
							</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>{planetName}</s.Planet_Name>
						<s.Info_Headline>No one knows how old Saturn's rings are</s.Info_Headline>
						<s.Info_Text>
							<p>
								There's a field of ice and rock debris circling Saturn that from
								afar, appear as rings.
							</p>
							<br />
							<p>
								Early telescope observations of the planet in the 1600s caused some
								confusion: does that planet have ears, or moons, or what?
							</p>
							<p>
								With better resolution, however, it soon became clear that there was
								a chain of small bodies encircling the gas giant.
							</p>
							<br />
							<p>
								It's possible that a single moon tore apart under Saturn's strong
								gravity and produced the rings.
							</p>
							<p>
								Or, maybe they've been around (pun intended) for the last few
								billion years, unable to coalesce into a larger body but resistant
								enough to gravity not to break up.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Saturn;
