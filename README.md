# Project shop book
> Design book shop interface like an online book reading app, you can click on any type of book and read it
### Installation && Usage
The application is run online on the website https://snack.expo.dev/ <br>
- Step 1: Create an expo account to run the app demo <br>
- Step 2: Choose the interface to demo as web, iphone .. or your personal phone
- Step 3: Click on the book you want to read and read it.
### View code in Screen
- HomeScreen
```php
 return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerSession}>
        {renderHeader(profile)}
        {renderButtonSection()}
      </View>
      {/* Body Section */}

      <ScrollView style={styles.myBook}>
        {/* Body Section */}
        <View style={styles.bookContainer}>
          {renderMyBookSection(myBooks, navigation)}
        </View>
        {/* Categoryes Section */}
        <View style={styles.categorySetion}>{renderCategoryHeader()}</View>
        <View>{renderCategoryData()}</View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
```
- BookDetail  (If there are books to be passed, then if . will be performed)
```php
 if (book) {
    return (
      <View style={styles.container}>
        <View style={styles.bookContainer}>{renderBookInfoSection()}</View>
        <View style={styles.descriptionContainer}>
          {renderBookDescription()}
        </View>
        <View style={styles.buttonContainer}>{renderBottomButton()}</View>
      </View>
    );
  } else {
    return <></>;
  }
```
## Result on completion
- Homepage results <br>

<img src="./assets/imgResults/home.png"  width="320" height="620">

- BookDetail results <br>
<img src="./assets/imgResults/detail.png"  width="320" height="620">

- Demo UI Video <br>
[![](https://res.cloudinary.com/marcomontalbano/image/upload/v1642259203/video_to_markdown/images/youtube--cUcFJQvaUNk-c05b58ac6eb4c4700831b2b3070cd403.jpg)](https://www.youtube.com/watch?v=cUcFJQvaUNk "")


