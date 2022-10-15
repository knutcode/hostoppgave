import axios from "axios";
import React, { useState } from "react";
import VENUS from "../../../../../assets/images/venus.png";
import * as s from "../../style";

const Venus = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Venus");

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
	getPlanetData("venus");

	return (
		<>
			<s.Section id="venus">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={VENUS} alt="venus" />

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
							Venus doesn't have any moons, and we aren't sure why.
						</s.Info_Headline>
						<s.Info_Text>
							<p>
								Both Mercury and Venus have no moons, which can be considered a
								surprise given there are dozens of other ones around the Solar
								System.
							</p>
							<p>Saturn has over 60, for example.</p>
							<p>
								And some moons are little more than captured asteroids, which may
								have been what happened with Mars' two moons, for example.
							</p>
							<br />
							<p>So what makes these planets different?</p>
							<p>
								No one is really sure why Venus doesn't, but there is at least one
								stream of research that suggests it could have had one in the past.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Venus;
