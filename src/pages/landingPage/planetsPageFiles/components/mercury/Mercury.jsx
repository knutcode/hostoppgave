import axios from "axios";
import React, { useState } from "react";
import MERCURY from "../../../../../assets/images/mercury.png";
import * as s from "../../style";

const Mercury = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Mercury");

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
	getPlanetData("mercure");

	return (
		<>
			<s.Section id="mercury">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={MERCURY} alt="mercury" />

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
						<s.Info_Headline>Mercury is hot, but not too hot for ice</s.Info_Headline>
						<s.Info_Text>
							<p>
								The closest planet to the Sun does indeed have ice on its surface.{" "}
							</p>
							<p>
								That sounds surprising at first glance, but the ice is found in
								permanently shadowed craters — those that never receive any
								sunlight.
							</p>
							<br />
							<p>
								It is thought that perhaps comets delivered this ice to Mercury in
								the first place.
							</p>
							<p>
								In fact, NASA's MESSENGER spacecraft not only found ice at the north
								pole, but it also found organics, which are the building blocks for
								life.
							</p>
							<br />
							<p>
								Mercury is way too hot and airless for life as we know it, but it
								shows how these elements are distributed across the Solar System.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Mercury;
