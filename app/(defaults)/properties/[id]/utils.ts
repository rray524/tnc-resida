import { formatPrice } from "@/utils/utils";

export const generateAdditionalDetails = (property: any) => [
  {
    label: "Price",
    value: `$${formatPrice(property.general_details.price)}`,
  },
  {
    label: "Taxes",
    value: `$${formatPrice(property.general_details.taxes)}`,
  },
  { label: "Address", value: property.general_details.address },
  { label: "Lot Size", value: property.general_details.lot_size },
  { label: "Directions", value: property.general_details.directions },
  { label: "Rooms", value: property.room_interior.rooms.toString() },
  { label: "Room Plus", value: property.room_interior.rooms_plus.toString() },
  {
    label: "Bedroom Plus",
    value: property.room_interior.bedrooms_plus.toString(),
  },
  {
    label: "Bedrooms",
    value: property.room_interior.bedrooms.toString(),
  },
  {
    label: "Kitchens",
    value: property.room_interior.kitchens.toString(),
  },
  { label: "Family Room", value: property.room_interior.family_room },
  { label: "Basement", value: property.room_interior.basement },
  { label: "Property Type", value: property.exterior.property_type },
  { label: "Style", value: property.exterior.style },
  { label: "Exterior", value: property.exterior.exterior },
  { label: "Garage Type", value: property.exterior.garage_type },
  {
    label: "Parking Spaces",
    value: property.exterior.drive_parking_spaces.toString(),
  },
  { label: "Pool", value: property.exterior.pool },
  { label: "Fireplace", value: property.utilities.fireplace_stove },
  { label: "Heat Source", value: property.utilities.heat_source },
  { label: "Heat Type", value: property.utilities.heat_type },
  {
    label: "Air Conditioning",
    value: property.utilities.central_air_conditioning,
  },
  { label: "Laundry Level", value: property.utilities.laundry_level },
  { label: "Municipality", value: property.at_a_glance.municipality },
  { label: "Sewers", value: property.utilities.sewers },
  { label: "Water", value: property.utilities.water },
  { label: "Neighborhood", value: property.at_a_glance.neighborhood },
  { label: "Area", value: property.at_a_glance.area },
  {
    label: "City",
    value: property.city,
  },
  {
    label: "State",
    value: property.state,
  },
  {
    label: "Country",
    value: property.country,
  },
];
