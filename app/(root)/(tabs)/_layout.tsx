import React from "react";
import { Tabs } from "expo-router";
import TabIcon from "@/components/ui/TabIcon";

import homeIcon from "../../../assets/icons/home.png";
import vehicleIcon from "../../../assets/icons/car.png";
import ProfileIcon from "../../../assets/icons/user.png";

const _layout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarShowLabel: false,
				tabBarStyle: {
					backgroundColor: "white",
					position: "absolute",
					borderTopColor: "#0061FF1A",
					borderTopWidth: 1,
					minHeight: 70,
				},
			}}
		>
			<Tabs.Screen
				name="home"
				options={{
					title: "Home",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={homeIcon}
							title="Home"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="listing"
				options={{
					title: "Listing",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={vehicleIcon}
							title="Listing"
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					headerShown: false,
					tabBarIcon: ({ focused }) => (
						<TabIcon
							focused={focused}
							icon={ProfileIcon}
							title="Profile"
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default _layout;
