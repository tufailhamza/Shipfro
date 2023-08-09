import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { COLORS, icons, images, SIZES } from "../../../constants";
import { useRouter } from "expo-router";

const RecentlyShipped = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const handleImageClick = (destination) => {
    router.push('/home');
  };

  // Sample data for package cards
  const packageData = [
    {
      id: 1,
      title: 'Package 1',
      courierProvider: 'FedEx',
      startingPoint: 'KHI',
      endingPoint: 'ISB',
      parcelDate: '2023-08-01',
      ID: 'ABC123',
      dimensions: '10 x 15 x 8 cm',
      description: 'Package 1 details here...',
      logo: '../../../assets/icons/amazon.png' // Replace with the path to FedEx logo image
    },
    {
      id: 2,
      title: 'Package 2',
      courierProvider: 'DHL',
      startingPoint: 'LHR',
      endingPoint: 'NYC',
      parcelDate: '2023-07-30',
      ID: 'XYZ789',
      dimensions: '20 x 30 x 25 cm',
      description: 'Package 2 details here...',
      logo:'../../../assets/icons/amazon.png', // Replace with the path to DHL logo image
    },
    // Add more package data as needed
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recently Shipped</Text>
      <Text style={styles.subHeading}>Check the status of your Shipment</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {packageData.map((packageItem) => (
          <TouchableOpacity
          activeOpacity={1}
            key={packageItem.id}
            style={styles.card}
            onPress={() => handleImageClick(packageItem.title)}
          >
            {/* Upper Left: Courier Logo and Package Title */}
            <View style={styles.upperLeft}>
              <Image source={icons.amazon} style={styles.courierLogo} />
              <Text style={styles.cardTitle}>{packageItem.title}</Text>
              <Text style={styles.courierName}>{packageItem.courierProvider}</Text>
              <Text style={styles.dimensions}>{packageItem.dimensions}</Text>
            </View>

            {/* Upper Right: Parcel Status */}
            <View style={styles.upperRight}>
              <Text style={styles.parcelStatus}>Parcel Status</Text>
              {/* Add status information here */}
            </View>

            {/* Bottom Left: Starting and Ending Point */}
            <View style={styles.bottomLeft}>
              <Text style={styles.pointText}>{packageItem.startingPoint}</Text>
              <Text style={styles.pointText}>{packageItem.endingPoint}</Text>
            </View>

            {/* Bottom Right: Parcel Date and ID */}
            <View style={styles.bottomRight}>
              <Text style={styles.parcelDate}>{packageItem.parcelDate}</Text>
              <Text style={styles.parcelId}>ID: {packageItem.ID}</Text>
            </View>

            <Image source={icons.rightarrow} style={styles.arrowIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 10,
    marginTop: 20,
  },
  heading: {
    fontSize: 24,
    color: COLORS.lightWhite,
    fontWeight: 'bold',
    marginBottom: 1,
  },
  subHeading: {
    fontSize: 15,
    color: COLORS.lightWhite,
    marginBottom: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    width: 350,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  upperLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  upperRight: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  bottomLeft: {
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
  bottomRight: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courierName: {
    fontSize: 14,
    color: COLORS.lightGray,
  },
  dimensions: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  courierLogo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  parcelStatus: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pointText: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  parcelDate: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  parcelId: {
    fontSize: 12,
    color: COLORS.lightGray,
  },
  arrowIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightGray,
  },
});

export default RecentlyShipped;
