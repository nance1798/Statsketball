import React, { memo, useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { AutocompleteDropdown } from 'react-native-autocomplete-dropdown';
import colors from '../config/colors';

export const SearchComp = memo(() => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <View>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        textInputProps={{
          placeholder: 'Type a Player',
        }}
        onSelectItem={setSelectedItem}
        dataSet={[
          { id: '1', title: 'Álex Abrines' },
          { id: '2', title: 'Steven Adams' },
          { id: '3', title: 'Bam Adebayo' },
          { id: '4', title: 'Deng Adel' },
          { id: '5', title: 'Bryce Adams-Woods' },
          { id: '6', title: 'DeVaughn Akoon-Purcell' },
          { id: '7', title: 'LaMarcus Aldridge' },
          { id: '8', title: 'Nickeil Alexander-Walker' },
          { id: '9', title: 'Grayson Allen' },
          { id: '10', title: 'Jarrett Allen' },
          { id: '11', title: 'Kadeem Allen' },
          { id: '12', title: 'Al-Farouq Aminu' },
          { id: '13', title: 'Justin Anderson' },
          { id: '14', title: 'Kyle Anderson' },
          { id: '15', title: 'Ryan Anderson' },
          { id: '16', title: 'Giannis Antetokounmpo' },
          { id: '17', title: 'Kostas Antetokounmpo' },
          { id: '18', title: 'Thanasis Antetokounmpo' },
          { id: '19', title: 'Carmelo Anthony' },
          { id: '20', title: 'OG Anunoby' },
          { id: '21', title: 'Ryan Arcidiacono' },
          { id: '22', title: 'Trevor Ariza' },
          { id: '23', title: 'D.J. Augustin' },
          { id: '24', title: 'Deandre Ayton' },
          { id: '25', title: 'Dwayne Bacon' },
          { id: '26', title: 'Marvin Bagley III' },
          { id: '27', title: 'Lonzo Ball' },
          { id: '28', title: 'Mo Bamba' },
          { id: '29', title: 'J.J. Barea' },
          { id: '30', title: 'Harrison Barnes' },
          { id: '31', title: 'RJ Barrett' },
          { id: '32', title: 'Will Barton' },
          { id: '33', title: 'Keita Bates-Diop' },
          { id: '34', title: 'Nicolas Batum' },
          { id: '35', title: 'Aron Baynes' },
          { id: '36', title: 'Kent Bazemore' },
          { id: '37', title: 'Darius Bazley' },
          { id: '38', title: 'Bradley Beal' },
          { id: '39', title: 'Malik Beasley' },
          { id: '40', title: 'Marco Belinelli' },
          { id: '41', title: 'Jordan Bell' },
          { id: '42', title: 'DeAndre Bembry'},
          { id: '43', title: 'Davis Bertans' },
          { id: '44', title: 'Patrick Beverley' },
          { id: '45', title: 'Khem Birch' },        
          { id: '46', title: 'Goga Bitadze' },
          { id: '47', title: 'Bismack Biyombo' },
          { id: '48', title: 'Nemanja Bjelica' },
          { id: '49', title: 'Tarik Black' },
          { id: '50', title: 'Bruce Brown' },
          { id: '51', title: 'Jaylen Brown' },
          { id: '52', title: 'Moses Brown' },
          { id: '53', title: 'Troy Brown Jr.' },
          { id: '54', title: 'Sterling Brown' },
          { id: '55', title: 'Jalen Brunson' },
          { id: '56', title: 'Thomas Bryant' },
          { id: '57', title: 'Reggie Bullock' },
          { id: '58', title: 'Trey Burke' },
          { id: '59', title: 'Alec Burks' },
          { id: '60', title: 'Jimmy Butler' },
          { id: '61', title: 'Bruno Caboclo' },
          { id: '62', title: 'Devontae Cacok' },
          { id: '63', title: 'Kentavious Caldwell-Pope' },
          { id: '64', title: 'Facundo Campazzo' },
          { id: '65', title: 'Vlatko Čančar' },
          { id: '66', title: 'Clint Capela' },
          { id: '67', title: 'Vernon Carey Jr.' },
          { id: '68', title: 'DeMarre Carroll' },
          { id: '69', title: 'Jevon Carter' },
          { id: '70', title: 'Michael Carter-Williams' },
          { id: '71', title: 'Alex Caruso' },
          { id: '72', title: 'Willie Cauley-Stein' },
          { id: '73', title: 'Lonnie Walker IV' },
          { id: '74', title: 'Chris Chiozza' },
          { id: '75', title: 'Marquese Chriss' },
          { id: '76', title: 'Gary Clark' },
          { id: '77', title: 'Brandon Clarke' },
          { id: '78', title: 'Jordan Clarkson' },
          { id: '79', title: 'Nicolas Claxton' },
          { id: '80', title: 'Chris Clemons' },
          { id: '81', title: 'Antonius Cleveland' },
          { id: '82', title: 'Amir Coffey' },
          { id: '83', title: 'John Collins' },
          { id: '84', title: 'Zach Collins' },
          { id: '85', title: 'Mike Conley' },
          { id: '86', title: 'Pat Connaughton' },
          { id: '87', title: 'Quinn Cook' },
          { id: '88', title: 'Tyler Cook' },
          { id: '89', title: 'DeMarcus Cousins' },
          { id: '90', title: 'Robert Covington' },
          { id: '91', title: 'Allen Crabbe' },
          { id: '92', title: 'Torrey Craig' },
          { id: '93', title: 'Jamal Crawford' },
          { id: '94', title: 'Jae Crowder' },
          { id: '95', title: 'Seth Curry' },
          { id: '96', title: 'Stephen Curry' },
          { id: '97', title: 'Troy Daniels' },
          { id: '98', title: 'Anthony Davis' },
          { id: '99', title: 'Ed Davis' },
          { id: '100', title: 'Terence Davis' },
          { id: '101', title: 'DeMar DeRozan' },
          { id: '102', title: 'Dewayne Dedmon' },
          { id: '103', title: 'Sam Dekker' },
          { id: '104', title: 'Matthew Dellavedova' },
          { id: '105', title: 'Cheick Diallo' },
          { id: '106', title: 'Hamidou Diallo' },
          { id: '107', title: 'Gorgui Dieng' },
          { id: '108', title: 'Donte DiVincenzo' },
          { id: '109', title: 'Luka Dončić' },
          { id: '110', title: 'Damyean Dotson' },
          { id: '111', title: 'Sekou Doumbouya' },
          { id: '112', title: 'PJ Dozier' },
          { id: '113', title: 'Goran Dragić' },
          { id: '114', title: 'Andre Drummond' },
          { id: '115', title: 'Jared Dudley' },
          { id: '116', title: 'Kris Dunn' },
          { id: '117', title: 'Kevin Durant' },
          { id: '118', title: 'Trevon Duval' },
          { id: '119', title: 'Jacob Evans' },
          { id: '120', title: 'Dante Exum' },
          { id: '121', title: 'Kenneth Faried' },
          { id: '122', title: 'Derrick Favors' },
          { id: '123', title: 'Cristiano Felício' },
          { id: '124', title: 'Terrance Ferguson' },
          { id: '125', title: 'Yogi Ferrell' },
          { id: '126', title: 'Dorian Finney-Smith' },
          { id: '127', title: 'Malachi Flynn' },
          { id: '128', title: 'Bryn Forbes' },
          { id: '129', title: 'Evan Fournier' },
          { id: '130', title: 'DeAaron Fox' },
          { id: '131', title: 'Tim Frazier' },
          { id: '132', title: 'Marc Gasol' },
          { id: '133', title: 'Rudy Gay' },
          { id: '134', title: 'Paul George' },
          { id: '135', title: 'Taj Gibson' },
          { id: '136', title: 'Harry Giles III' },
          { id: '137', title: 'Shai Gilgeous-Alexander' },
          { id: '138', title: 'Rui Hachimura' },
          { id: '139', title: 'Tyler Hall' },
          { id: '140', title: 'Josh Hall' },
          { id: '141', title: 'Tyrese Haliburton' },
          { id: '142', title: 'Josh Hart' },
          { id: '143', title: 'Isaiah Hartenstein' },
          { id: '144', title: 'Udonis Haslem' },
          { id: '145', title: 'Jaxson Hayes' },
          { id: '146', title: 'Gordon Hayward' },
          { id: '147', title: 'Kevin Hervey' },
          { id: '148', title: 'George Hill' },
          { id: '149', title: 'Solomon Hill' },
          { id: '150', title: 'Nate Hinton' },
          { id: '151', title: 'Aaron Holiday' },
          { id: '152', title: 'Jrue Holiday' },
          { id: '153', title: 'Justin Holiday' },
          { id: '154', title: 'Rondae Hollis-Jefferson' },
          { id: '155', title: 'Richaun Holmes' },
          { id: '156', title: 'Rodney Hood' },
          { id: '157', title: 'Al Horford' },
          { id: '158', title: 'Talen Horton-Tucker' },
          { id: '159', title: 'Danuel House Jr.' },
          { id: '160', title: 'Dwight Howard' },
          { id: '161', title: 'Markus Howard' },
          { id: '162', title: 'Kevin Huerter' },
          { id: '163', title: 'Elijah Hughes' },
          { id: '164', title: 'DeAndre Hunter' },
          { id: '165', title: 'Chandler Hutchison' },
          { id: '166', title: 'Serge Ibaka' },
          { id: '167', title: 'Andre Iguodala' },
          { id: '168', title: 'Ersan İlyasova' },
          { id: '169', title: 'Joe Ingles' },
          { id: '170', title: 'Brandon Ingram' },
          { id: '171', title: 'Kyrie Irving' },
          { id: '172', title: 'Jonathan Isaac' },
          { id: '173', title: 'Wes Iwundu' },
          { id: '174', title: 'Frank Jackson' },
          { id: '175', title: 'Jaren Jackson Jr.' },
          { id: '176', title: 'Josh Jackson' },
          { id: '177', title: 'Justin Jackson' },
          { id: '178', title: 'Reggie Jackson' },
          { id: '179', title: 'Demetrius Jackson' },
          { id: '180', title: 'LeBron James' },
          { id: '181', title: 'DaQuan Jeffries' },
          { id: '182', title: 'Ty Jerome' },
          { id: '183', title: 'Amile Jefferson' },
          { id: '184', title: 'John Jenkins' },
          { id: '185', title: 'Brandon Jennings' },
          { id: '186', title: 'Jaren Johnson' },
          { id: '187', title: 'Stanley Johnson' },
          { id: '188', title: 'Tre Jones' },
          { id: '189', title: 'Derrick Jones Jr.' },
          { id: '190', title: 'DeAndre Jordan' },
          { id: '191', title: 'Cameron Johnson' },
          { id: '192', title: 'James Johnson' },
          { id: '193', title: 'Keldon Johnson' },
          { id: '194', title: 'Tyler Johnson' },
          { id: '195', title: 'Wesley Johnson' },
          { id: '196', title: 'Nikola Jokić' },
          { id: '197', title: 'Damian Jones' },
          { id: '198', title: 'Tyus Jones' },
          { id: '199', title: 'Devin Jones' },
          { id: '200', title: 'Terrence Jones' },
          { id: '201', title: 'Mason Jones' },
          { id: '202', title: 'Frank Kaminsky' },
          { id: '203', title: 'Enes Kanter' },
          { id: '204', title: 'Luke Kennard' },
          { id: '205', title: 'Michael Kidd-Gilchrist' },
          { id: '206', title: 'George King' },
          { id: '207', title: 'Maxi Kleber' },
          { id: '208', title: 'Brandon Knight' },
          { id: '209', title: 'Kevin Knox II' },
          { id: '210', title: 'John Konchar' },
          { id: '211', title: 'Furkan Korkmaz' },
          { id: '212', title: 'Luke Kornet' },
          { id: '213', title: 'Kyle Kuzma' },
          { id: '214', title: 'Kevin Love' },
          { id: '215', title: 'Kyle Lowry' },
          { id: '216', title: 'Tyronn Lue' },
          { id: '217', title: 'Timothe Luwawu-Cabarrot' },
          { id: '218', title: 'Tyler Lydon' },
          { id: '219', title: 'Trey Lyles' },
          { id: '220', title: 'Thon Maker' },
          { id: '221', title: 'Daryl Macon' },
          { id: '222', title: 'Josh Magette' },
          { id: '223', title: 'Ian Mahinmi' },
          { id: '224', title: 'Thon Maker' },
          { id: '225', title: 'Boban Marjanović' },
          { id: '226', title: 'Lauri Markkanen' },
          { id: '227', title: 'Nico Mannion' },
          { id: '228', title: 'Frank Mason III' },
          { id: '229', title: 'Garrison Mathews' },
          { id: '230', title: 'Wesley Matthews' },
          { id: '231', title: 'Caleb Martin' },
          { id: '232', title: 'Cody Martin' },
          { id: '233', title: 'Kelan Martin' },
          { id: '234', title: 'Kevin Martin' },
          { id: '235', title: 'Khris Middleton' },
          { id: '236', title: 'Paul Millsap' },
          { id: '237', title: 'Patty Mills' },
          { id: '238', title: 'Shake Milton' },
          { id: '239', title: 'Donovan Mitchell' },
          { id: '240', title: 'Naz Mitrou-Long' },
          { id: '241', title: 'Malik Monk' },
          { id: '242', title: 'ETwaun Moore' },
          { id: '243', title: 'Ja Morant' },
          { id: '244', title: 'Juwan Morgan' },
          { id: '245', title: 'Markieff Morris' },
          { id: '246', title: 'Monte Morris' },
          { id: '247', title: 'Marcus Morris Sr.' },
          { id: '248', title: 'Johnathan Motley' },
          { id: '249', title: 'Svi Mykhailiuk' },
          { id: '250', title: 'Abdel Nader' },
          { id: '251', title: 'Larry Nance Jr.' },
          { id: '252', title: 'Shabazz Napier' },
          { id: '253', title: 'Raul Neto' },
          { id: '254', title: 'Georges Niang' },
          { id: '255', title: 'Nerlens Noel' },
          { id: '256', title: 'Zach Norvell Jr.' },
          { id: '257', title: 'Jaylen Nowell' },
          { id: '258', title: 'Frank Ntilikina' },
          { id: '259', title: 'Kendrick Nunn' },
          { id: '260', title: 'Jusuf Nurkić' },
          { id: '261', title: 'David Nwaba' },
          { id: '262', title: 'Jordan Nwora' },
          { id: '263', title: 'Royce ONeale' },
          { id: '264', title: "Jahlil Okafor" },
          { id: '265', title: 'Chuma Okeke' },
          { id: '266', title: 'Josh Okogie' },
          { id: '267', title: 'KZ Okpala' },
          { id: '268', title: 'Onyeka Okongwu' },
          { id: '269', title: 'Cedi Osman' },
          { id: '270', title: 'Kelly Oubre Jr.' },
          { id: '271', title: 'Jabari Parker' },
          { id: '272', title: 'Tony Parker' },
          { id: '273', title: 'Chandler Parsons' },
          { id: '274', title: 'Patrick Patterson' },
          { id: '275', title: 'Justin Patton' },
          { id: '276', title: 'Chris Paul' },
          { id: '277', title: 'Cameron Payne' },
          { id: '278', title: 'Elfrid Payton' },
          { id: '279', title: 'Gary Payton II' },
          { id: '280', title: 'Theo Pinson' },
          { id: '281', title: 'Mason Plumlee' },
          { id: '282', title: 'Miles Plumlee' },
          { id: '283', title: 'Jakob Poeltl' },
          { id: '284', title: 'Vincent Poirier' },
          { id: '285', title: 'Shamorie Ponds' },
          { id: '286', title: 'Jordan Poole' },
          { id: '287', title: 'Michael Porter Jr.' },
          { id: '288', title: 'Kevin Porter Jr.' },
          { id: '289', title: 'Otto Porter Jr.' },
          { id: '290', title: 'Bobby Portis' },
          { id: '291', title: 'Kristaps Porziņģis' },
          { id: '292', title: 'Dwight Powell' },
          { id: '293', title: 'Norman Powell' },
          { id: '294', title: 'Taurean Prince' },
          { id: '295', title: 'Zhou Qi' },
          { id: '296', title: 'Immanuel Quickley' },
          { id: '297', title: 'Julius Randle' },
          { id: '298', title: 'JJ Redick' },
          { id: '299', title: 'Naz Reid' },
          { id: '300', title: 'Cam Reynolds' },
          { id: '301', title: 'Cameron Reynolds' },
          { id: '302', title: 'Josh Richardson' },
          { id: '303', title: 'Malachi Richardson' },
          { id: '304', title: 'Austin Rivers' },
          { id: '305', title: 'Glenn Robinson III' },
          { id: '306', title: 'Jerome Robinson' },
          { id: '307', title: 'Mitchell Robinson' },
          { id: '308', title: 'Duncan Robinson' },
          { id: '309', title: 'Justin Robinson' },
          { id: '310', title: 'Isaiah Roby' },
          { id: '311', title: 'Rajon Rondo' },
          { id: '312', title: 'Derrick Rose' },
          { id: '313', title: 'Terrence Ross' },
          { id: '314', title: 'Terry Rozier' },
          { id: '315', title: 'Ricky Rubio' },
          { id: '316', title: 'DAngelo Russell' },
          { id: '317', title: 'Domantas Sabonis' },
          { id: '318', title: 'JaKarr Sampson' },
          { id: '319', title: 'Dario Šarić' },
          { id: '320', title: 'Tomáš Satoranský' },
          { id: '321', title: 'Chris Silva' },
          { id: '322', title: 'Ben Simmons' },
          { id: '323', title: 'Jonathon Simmons' },
          { id: '324', title: 'Kobi Simmons' },
          { id: '325', title: 'Anfernee Simons' },
          { id: '326', title: 'Deividas Sirvydis' },
          { id: '327', title: 'Alen Smailagić' },
          { id: '328', title: 'Marcus Smart' },
          { id: '329', title: 'Ish Smith' },
          { id: '330', title: 'J.R. Smith' },
          { id: '331', title: 'Zhaire Smith' },
          { id: '332', title: 'Dennis Smith Jr.' },
          { id: '333', title: 'Tony Snell' },
          { id: '334', title: 'Thabo Sefolosha' },
          { id: '335', title: 'Rayjon Tucker' },
          { id: '336', title: 'Khyri Thomas' },
          { id: '337', title: 'Lance Thomas' },
          { id: '338', title: 'Matt Thomas' },
          { id: '339', title: 'Klay Thompson' },
          { id: '340', title: 'Tristan Thompson' },
          { id: '341', title: 'Sindarius Thornwell' },
          { id: '342', title: 'Matisse Thybulle' },
          { id: '343', title: 'Killian Tillie' },
          { id: '344', title: 'Anthony Tolliver' },
          { id: '345', title: 'Juan Toscano-Anderson' },
          { id: '346', title: 'Gary Trent Jr.' },
          { id: '347', title: 'Allonzo Trier' },
          { id: '348', title: 'P.J. Tucker' },
          { id: '349', title: 'Evan Turner' },
          { id: '350', title: 'Myles Turner' },
          { id: '351', title: 'Jarrod Uthoff' },
          { id: '352', title: 'Jonas Valančiūnas' },
          { id: '353', title: 'Denzel Valentine' },
          { id: '354', title: 'Fred VanVleet' },
          { id: '355', title: 'Noah Vonleh' },
          { id: '356', title: 'Nikola Vučević' },
          { id: '357', title: 'Dean Wade' },
          { id: '358', title: 'Moritz Wagner' },
          { id: '359', title: 'Dion Waiters' },
          { id: '360', title: 'Kemba Walker' },
          { id: '361', title: 'Lonnie Walker IV' },
          { id: '362', title: 'John Wall' },
          { id: '363', title: 'Brad Wanamaker' },
          { id: '364', title: 'T.J. Warren' },
          { id: '365', title: 'P.J. Washington' },
          { id: '366', title: 'Yuta Watanabe' },
          { id: '367', title: 'Tremont Waters' },
          { id: '368', title: 'Paul Watson' },
          { id: '369', title: 'Quinndary Weatherspoon' },
          { id: '370', title: 'Russell Westbrook' },
          { id: '371', title: 'Coby White' },
          { id: '372', title: 'Hassan Whiteside' },
          { id: '373', title: 'Andrew Wiggins' },
          { id: '374', title: 'Grant Williams' },
          { id: '375', title: 'Kenrich Williams' },
          { id: '376', title: 'Lou Williams' },
          { id: '377', title: 'Marvin Williams' },
          { id: '378', title: 'Patrick Williams' },
          { id: '379', title: 'Robert Williams III' },
          { id: '380', title: 'Zion Williamson' },
          { id: '381', title: 'D.J. Wilson' },
          { id: '382', title: 'Dylan Windler' },
          { id: '383', title: 'Justise Winslow' },
          { id: '384', title: 'Christian Wood' },
          { id: '385', title: 'Delon Wright' },
          { id: '386', title: 'Thaddeus Young' },
          { id: '387', title: 'Trae Young' },
          { id: '388', title: 'Cody Zeller' },
          { id: '389', title: 'Tyler Zeller' },
          { id: '390', title: 'Ante Žižić' },
          { id: '391', title: 'Ivica Zubac' },

        ]}
      />
      
    </View>
  )
})

const styles = StyleSheet.create({
   container:{
    padding: 10,
    marginBottom: 20,
    backgroundColor: colors.textColor,
    borderRadius: 5,
    height: 50,
    width: 250, 
    margin: 20,
  },
  text: {
    color: colors.textColor,
    fontSize: 20,
    
  }

});