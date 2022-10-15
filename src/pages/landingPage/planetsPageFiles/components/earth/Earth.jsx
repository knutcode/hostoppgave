// import axios from "axios";
import axios from "axios";
import React, { useState } from "react";
import EARTH from "../../../../../assets/images/earth.png";
import * as s from "../../style";

const Earth = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Earth");

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
	getPlanetData("terre");

	return (
		<>
			<s.Section id="earth">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={EARTH} alt="earth" />

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
						<s.Info_Headline>
							You can see Earth's magnetic field at work during light shows.
						</s.Info_Headline>
						<s.Info_Text>
							<p>
								We have a magnetic field surrounding our planet that protects us
								from the blasts of radiation and particles the Sun sends our way.
							</p>
							<br />
							<p>
								Good thing, too, because such flare-ups could prove deadly to
								unprotected people; that's why NASA keeps an eye on solar activity
								for astronauts on the International Space Station, for example.
							</p>
							<br />
							<p>
								At any rate, when you see auroras shining in the sky, that's what
								happens when the particles from the Sun flow along the magnetic
								field lines and interact with Earth's upper atmosphere.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Earth;
