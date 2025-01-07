import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, Image, TextInput, Dimensions } from 'react-native';
import { trendingHashtags, topCommunity, topNomads } from '../data';

const { width } = Dimensions.get('window');

const SearchScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Discover the world</Text>
      <TextInput style={styles.searchInput} placeholder="Search" />

      <View style={styles.section}>
        <Image
          source={{ uri: 'https://picsum.photos/800/400' }}
          style={styles.topImage}
        />
        <Text style={styles.topImageText}>#Top search of the day</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Trending hashtags</Text>
        <FlatList
          data={trendingHashtags}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.hashtagItem}>
              <Image source={{ uri: 'https://picsum.photos/300/300' }} style={styles.hashtagImage} />
              <Text style={styles.hashtagText}>{item.hashtag}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Top community</Text>
        <FlatList
          data={topCommunity}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.communityItem}>
              <Image
                source={{ uri: 'https://picsum.photos/400/300' }}
                style={styles.communityImage}
              />
              <Text style={styles.communityText}>{item.title}</Text>
            </View>
          )}
          showsHorizontalScrollIndicator={false}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Top nomads</Text>
        <View style={styles.nomadsContainer}>
          {topNomads.map((nomad) => (
            <View key={nomad.id} style={styles.nomadItem}>
              <Image source={{ uri: nomad.photo }} style={styles.nomadImage} />
              <Text style={styles.nomadName}>{nomad.name}</Text>
              <Text style={styles.nomadFollowers}>{nomad.followers} followers</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  topImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  topImageText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    borderRadius: 4,
  },
  hashtagItem: {
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    padding: 10,
    marginRight: 8,
    alignItems: 'center',
  },
  hashtagImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginBottom: 4,
  },
  hashtagText: {
    fontSize: 14,
    textAlign: 'center',
  },
  communityItem: {
    marginRight: 16,
  },
  communityImage: {
    width: width * 0.6,
    height: 120,
    borderRadius: 8,
  },
  communityText: {
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nomadsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nomadItem: {
    alignItems: 'center',
    width: width * 0.28,
  },
  nomadImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  nomadName: {
    fontWeight: 'bold',
  },
  nomadFollowers: {
    fontSize: 12,
    color: '#777',
  },
});

export default SearchScreen;
