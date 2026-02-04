// i18n translations
const translations = {
    ko: {
        title: '오늘 뭐 먹지?',
        tagline: '스와이프로 저녁 메뉴를 정해보세요',
        hintLeft: '← 다음 메뉴',
        hintRight: '레시피 보기 →',
        btnSkip: '다음',
        btnRecipe: '레시피',
        ingredients: '재료',
        steps: '만드는 법',
        tip: '팁',
        peopleLike: '명이 좋아해요',
        peopleDislike: '명이 별로래요',
        delicious: '맛있어요!',
        notGood: '별로예요'
    },
    en: {
        title: 'What to eat?',
        tagline: 'Swipe to decide your dinner menu',
        hintLeft: '← Next menu',
        hintRight: 'View recipe →',
        btnSkip: 'Skip',
        btnRecipe: 'Recipe',
        ingredients: 'Ingredients',
        steps: 'How to cook',
        tip: 'Tip',
        peopleLike: 'people liked this',
        peopleDislike: 'people disliked this',
        delicious: 'Delicious!',
        notGood: 'Not for me'
    }
};

const koreanMenus = [
    {
        name: '김치찌개', nameEn: 'Kimchi Stew',
        image: 'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop',
        tag: '찌개', tagEn: 'Stew',
        description: '돼지고기와 김치가 어우러진 얼큰한 찌개',
        descriptionEn: 'Spicy stew with pork and fermented kimchi',
        ingredients: ['잘 익은 김치 300g', '돼지고기 앞다리살 200g', '두부 1/2모', '대파 1대', '청양고추 2개', '다진 마늘 1큰술'],
        ingredientsEn: ['300g fermented kimchi', '200g pork shoulder', '1/2 block tofu', '1 green onion', '2 chili peppers', '1 tbsp minced garlic'],
        steps: ['김치를 먹기 좋은 크기로 썰어주세요', '돼지고기를 한입 크기로 자릅니다', '냄비에 참기름을 두르고 돼지고기를 볶아주세요', '고기가 익으면 김치를 넣고 함께 볶습니다', '물 2컵을 넣고 끓여주세요', '두부와 대파, 고추를 넣고 5분 더 끓이면 완성!'],
        stepsEn: ['Cut kimchi into bite-sized pieces', 'Cut pork into bite-sized pieces', 'Add sesame oil to pot and stir-fry pork', 'When meat is cooked, add kimchi and stir-fry together', 'Add 2 cups of water and boil', 'Add tofu, green onion, and chili, boil 5 more minutes!'],
        tip: '김치는 잘 익은 신김치를 사용해야 깊은 맛이 나요. 돼지고기 대신 참치캔을 넣어도 맛있어요!',
        tipEn: 'Use well-fermented sour kimchi for deep flavor. Canned tuna works great as a substitute for pork!',
        likes: 342, dislikes: 12
    },
    {
        name: '된장찌개', nameEn: 'Soybean Paste Stew',
        image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop',
        tag: '찌개', tagEn: 'Stew',
        description: '구수한 된장과 두부, 채소가 들어간 건강식',
        descriptionEn: 'Healthy stew with savory soybean paste, tofu, and vegetables',
        ingredients: ['된장 2큰술', '두부 1/2모', '감자 1개', '호박 1/3개', '양파 1/2개', '청양고추 1개', '대파 1대'],
        ingredientsEn: ['2 tbsp soybean paste', '1/2 block tofu', '1 potato', '1/3 zucchini', '1/2 onion', '1 chili pepper', '1 green onion'],
        steps: ['감자와 호박, 양파를 깍둑 썰어주세요', '냄비에 멸치육수 2컵을 넣고 끓입니다', '된장을 풀어 넣고 감자를 먼저 넣어주세요', '감자가 반쯤 익으면 나머지 재료를 넣습니다', '두부를 넣고 5분 더 끓이면 완성!'],
        stepsEn: ['Dice potato, zucchini, and onion', 'Boil 2 cups of anchovy stock in pot', 'Dissolve soybean paste and add potato first', 'When potato is half cooked, add remaining ingredients', 'Add tofu and boil 5 more minutes!'],
        tip: '멸치육수 대신 쌀뜨물을 사용하면 더 구수해요!',
        tipEn: 'Using rice water instead of anchovy stock makes it even more savory!',
        likes: 289, dislikes: 8
    },
    {
        name: '삼겹살', nameEn: 'Grilled Pork Belly',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop',
        tag: '고기', tagEn: 'Meat',
        description: '두툼한 삼겹살을 구워 쌈에 싸먹는 맛',
        descriptionEn: 'Thick pork belly grilled and wrapped in lettuce',
        ingredients: ['삼겹살 500g', '상추', '깻잎', '쌈장', '마늘', '고추'],
        ingredientsEn: ['500g pork belly', 'Lettuce leaves', 'Perilla leaves', 'Ssamjang sauce', 'Garlic cloves', 'Chili peppers'],
        steps: ['삼겹살을 1.5cm 두께로 썰어주세요', '달군 팬에 삼겹살을 올려 구워줍니다', '앞뒤로 노릇하게 구워주세요', '상추와 깻잎에 쌈장, 마늘과 함께 싸먹으면 완성!'],
        stepsEn: ['Slice pork belly 1.5cm thick', 'Place pork belly on heated pan and grill', 'Grill until golden brown on both sides', 'Wrap in lettuce and perilla leaves with ssamjang and garlic!'],
        tip: '고기를 구울 때 너무 자주 뒤집지 마세요. 육즙이 빠져나가요!',
        tipEn: 'Don\'t flip the meat too often while grilling. It loses its juices!',
        likes: 567, dislikes: 15
    },
    {
        name: '불고기', nameEn: 'Bulgogi',
        image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&h=300&fit=crop',
        tag: '고기', tagEn: 'Meat',
        description: '달콤한 양념에 재운 소고기 구이',
        descriptionEn: 'Grilled beef marinated in sweet soy sauce',
        ingredients: ['소고기 불고기용 400g', '배 1/4개', '간장 4큰술', '설탕 2큰술', '다진 마늘 1큰술', '참기름 1큰술', '양파 1개'],
        ingredientsEn: ['400g beef (bulgogi cut)', '1/4 pear', '4 tbsp soy sauce', '2 tbsp sugar', '1 tbsp minced garlic', '1 tbsp sesame oil', '1 onion'],
        steps: ['배를 갈아서 양념장을 만들어주세요', '간장, 설탕, 마늘, 참기름을 섞습니다', '소고기에 양념을 넣고 30분 재워주세요', '달군 팬에 양파와 함께 볶아주세요', '고기가 익으면 완성!'],
        stepsEn: ['Blend pear to make marinade base', 'Mix soy sauce, sugar, garlic, and sesame oil', 'Marinate beef for 30 minutes', 'Stir-fry with onion in heated pan', 'Done when meat is cooked!'],
        tip: '배 대신 키위를 넣으면 고기가 더 부드러워져요!',
        tipEn: 'Using kiwi instead of pear makes the meat even more tender!',
        likes: 423, dislikes: 11
    },
    {
        name: '제육볶음', nameEn: 'Spicy Pork Stir-fry',
        image: 'https://images.unsplash.com/photo-1632709810780-b5a4343cebec?w=400&h=300&fit=crop',
        tag: '고기', tagEn: 'Meat',
        description: '매콤달콤한 양념의 돼지고기 볶음',
        descriptionEn: 'Stir-fried pork in sweet and spicy gochujang sauce',
        ingredients: ['돼지고기 앞다리살 400g', '고추장 2큰술', '고춧가루 1큰술', '간장 2큰술', '설탕 1큰술', '양파 1개', '대파 1대'],
        ingredientsEn: ['400g pork shoulder', '2 tbsp gochujang', '1 tbsp chili flakes', '2 tbsp soy sauce', '1 tbsp sugar', '1 onion', '1 green onion'],
        steps: ['돼지고기를 먹기 좋게 썰어주세요', '고추장, 고춧가루, 간장, 설탕으로 양념장을 만듭니다', '고기에 양념을 버무려 10분 재워주세요', '달군 팬에 기름을 두르고 고기를 볶습니다', '양파와 대파를 넣고 함께 볶으면 완성!'],
        stepsEn: ['Cut pork into bite-sized pieces', 'Make sauce with gochujang, chili flakes, soy sauce, sugar', 'Mix meat with sauce and marinate for 10 minutes', 'Heat oil in pan and stir-fry meat', 'Add onion and green onion, stir-fry together!'],
        tip: '양배추나 깻잎을 곁들여 먹으면 더 맛있어요!',
        tipEn: 'Serve with cabbage or perilla leaves for better taste!',
        likes: 398, dislikes: 14
    },
    {
        name: '비빔밥', nameEn: 'Bibimbap',
        image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?w=400&h=300&fit=crop',
        tag: '밥', tagEn: 'Rice',
        description: '각종 나물과 고추장의 조화',
        descriptionEn: 'Mixed rice with various vegetables and gochujang',
        ingredients: ['밥 1공기', '시금치 나물', '콩나물', '당근', '계란 1개', '고추장 2큰술', '참기름 1큰술'],
        ingredientsEn: ['1 bowl rice', 'Seasoned spinach', 'Bean sprouts', 'Carrot', '1 egg', '2 tbsp gochujang', '1 tbsp sesame oil'],
        steps: ['시금치, 콩나물, 당근을 각각 데쳐서 나물로 만들어주세요', '그릇에 밥을 담고 나물을 올립니다', '계란 프라이를 올려주세요', '고추장과 참기름을 넣고 비벼 드세요!'],
        stepsEn: ['Blanch spinach, bean sprouts, and carrot separately for namul', 'Place rice in bowl and top with vegetables', 'Add a fried egg on top', 'Add gochujang and sesame oil, mix well!'],
        tip: '돌솥에 하면 누룽지도 먹을 수 있어요!',
        tipEn: 'Make it in a hot stone pot to enjoy crispy rice at the bottom!',
        likes: 445, dislikes: 9
    },
    {
        name: '떡볶이', nameEn: 'Tteokbokki',
        image: 'https://images.unsplash.com/photo-1635363638580-c2809d049eee?w=400&h=300&fit=crop',
        tag: '분식', tagEn: 'Snack',
        description: '매콤달콤한 고추장 양념의 떡 요리',
        descriptionEn: 'Chewy rice cakes in sweet and spicy gochujang sauce',
        ingredients: ['떡볶이떡 300g', '어묵 2장', '고추장 3큰술', '고춧가루 1큰술', '설탕 2큰술', '간장 1큰술', '대파 1대'],
        ingredientsEn: ['300g rice cakes', '2 fish cakes', '3 tbsp gochujang', '1 tbsp chili flakes', '2 tbsp sugar', '1 tbsp soy sauce', '1 green onion'],
        steps: ['떡을 물에 불려주세요', '냄비에 물 2컵을 넣고 끓입니다', '고추장, 고춧가루, 설탕, 간장을 넣어 양념을 만들어요', '떡과 어묵을 넣고 끓여주세요', '양념이 졸아들면 대파를 넣고 완성!'],
        stepsEn: ['Soak rice cakes in water', 'Boil 2 cups of water in pot', 'Add gochujang, chili flakes, sugar, soy sauce for sauce', 'Add rice cakes and fish cakes, boil', 'When sauce thickens, add green onion and done!'],
        tip: '라면사리나 치즈를 추가하면 더 맛있어요!',
        tipEn: 'Add ramen noodles or cheese for extra deliciousness!',
        likes: 521, dislikes: 18
    },
    {
        name: '칼국수', nameEn: 'Kalguksu',
        image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
        tag: '면', tagEn: 'Noodle',
        description: '손으로 썬 면과 시원한 국물',
        descriptionEn: 'Hand-cut noodles in refreshing broth',
        ingredients: ['칼국수면 200g', '감자 1개', '호박 1/4개', '양파 1/2개', '멸치 육수 4컵', '다진 마늘 1큰술'],
        ingredientsEn: ['200g knife-cut noodles', '1 potato', '1/4 zucchini', '1/2 onion', '4 cups anchovy broth', '1 tbsp minced garlic'],
        steps: ['멸치와 다시마로 육수를 내주세요', '감자, 호박, 양파를 썰어 육수에 넣습니다', '감자가 익으면 면을 넣어주세요', '면이 익으면 다진 마늘을 넣고 완성!'],
        stepsEn: ['Make broth with anchovies and kelp', 'Add sliced potato, zucchini, and onion to broth', 'When potato is cooked, add noodles', 'When noodles are done, add garlic and finish!'],
        tip: '바지락을 넣으면 시원한 맛이 배가 돼요!',
        tipEn: 'Adding clams doubles the refreshing flavor!',
        likes: 312, dislikes: 7
    },
    {
        name: '삼계탕', nameEn: 'Samgyetang',
        image: 'https://images.unsplash.com/photo-1617093727343-374698b1b08d?w=400&h=300&fit=crop',
        tag: '탕', tagEn: 'Soup',
        description: '인삼과 찹쌀을 넣어 끓인 보양식',
        descriptionEn: 'Nourishing chicken soup with ginseng and glutinous rice',
        ingredients: ['영계 1마리', '찹쌀 1/2컵', '인삼 1뿌리', '대추 3개', '마늘 5쪽', '대파 1대'],
        ingredientsEn: ['1 young chicken', '1/2 cup glutinous rice', '1 ginseng root', '3 jujubes', '5 garlic cloves', '1 green onion'],
        steps: ['영계 뱃속을 깨끗이 씻어주세요', '찹쌀, 인삼, 대추, 마늘을 닭 뱃속에 넣습니다', '냄비에 닭을 넣고 물을 부어주세요', '1시간 정도 푹 끓여주세요', '소금, 후추로 간을 맞추면 완성!'],
        stepsEn: ['Clean the chicken cavity thoroughly', 'Stuff with glutinous rice, ginseng, jujubes, and garlic', 'Place chicken in pot and cover with water', 'Simmer for about 1 hour', 'Season with salt and pepper!'],
        tip: '여름철 복날에 먹으면 기력 회복에 좋아요!',
        tipEn: 'Great for recovering energy during hot summer days!',
        likes: 287, dislikes: 11
    },
    {
        name: '해물파전', nameEn: 'Seafood Pancake',
        image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
        tag: '전', tagEn: 'Pancake',
        description: '해물과 파가 듬뿍 들어간 전',
        descriptionEn: 'Crispy pancake loaded with seafood and green onions',
        ingredients: ['부침가루 1컵', '쪽파 한 줌', '오징어 1/2마리', '새우 5마리', '홍합 약간', '계란 1개'],
        ingredientsEn: ['1 cup pancake flour', 'Handful of green onions', '1/2 squid', '5 shrimp', 'Some mussels', '1 egg'],
        steps: ['부침가루에 물을 넣어 반죽을 만들어주세요', '오징어와 새우를 손질해서 썰어줍니다', '팬에 기름을 넉넉히 두르고 반죽을 올려요', '쪽파와 해물을 올리고 노릇하게 구워주세요', '뒤집어서 양면을 바삭하게 구우면 완성!'],
        stepsEn: ['Mix pancake flour with water to make batter', 'Clean and slice squid and shrimp', 'Add generous oil to pan and pour batter', 'Top with green onions and seafood, fry until golden', 'Flip and fry both sides crispy!'],
        tip: '막걸리와 함께 먹으면 꿀조합이에요!',
        tipEn: 'Perfect combo with makgeolli (rice wine)!',
        likes: 378, dislikes: 13
    },
    {
        name: '감자탕', nameEn: 'Gamjatang',
        image: 'https://images.unsplash.com/photo-1583224944127-04b24dcd569c?w=400&h=300&fit=crop',
        tag: '탕', tagEn: 'Soup',
        description: '돼지 등뼈와 감자를 푹 끓인 탕',
        descriptionEn: 'Hearty soup with pork spine and potatoes',
        ingredients: ['돼지 등뼈 1kg', '감자 3개', '우거지', '들깨가루 3큰술', '된장 1큰술', '고춧가루 2큰술'],
        ingredientsEn: ['1kg pork spine', '3 potatoes', 'Dried cabbage leaves', '3 tbsp perilla powder', '1 tbsp soybean paste', '2 tbsp chili flakes'],
        steps: ['등뼈를 찬물에 담가 핏물을 빼주세요', '냄비에 등뼈와 물을 넣고 끓입니다', '된장, 고춧가루로 양념해주세요', '감자와 우거지를 넣고 푹 끓여주세요', '들깨가루를 넣고 한소끔 끓이면 완성!'],
        stepsEn: ['Soak pork spine in cold water to remove blood', 'Boil spine with water in pot', 'Season with soybean paste and chili flakes', 'Add potatoes and cabbage, simmer well', 'Add perilla powder and bring to boil!'],
        tip: '밥을 말아먹거나 볶음밥으로 마무리하면 최고!',
        tipEn: 'Best finished with rice mixed in or fried rice!',
        likes: 356, dislikes: 10
    },
    {
        name: '닭갈비', nameEn: 'Dak-galbi',
        image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
        tag: '고기', tagEn: 'Meat',
        description: '매콤한 양념의 닭고기와 채소 볶음',
        descriptionEn: 'Spicy stir-fried chicken with vegetables',
        ingredients: ['닭다리살 500g', '고추장 3큰술', '고춧가루 2큰술', '간장 2큰술', '양배추', '고구마', '떡'],
        ingredientsEn: ['500g chicken thigh', '3 tbsp gochujang', '2 tbsp chili flakes', '2 tbsp soy sauce', 'Cabbage', 'Sweet potato', 'Rice cakes'],
        steps: ['닭고기를 한입 크기로 썰어주세요', '고추장, 고춧가루, 간장으로 양념장을 만듭니다', '닭고기에 양념을 버무려 30분 재워주세요', '팬에 양배추, 고구마를 깔고 닭을 올려요', '뚜껑을 덮고 익히면 완성!'],
        stepsEn: ['Cut chicken into bite-sized pieces', 'Make sauce with gochujang, chili flakes, soy sauce', 'Marinate chicken for 30 minutes', 'Layer cabbage and sweet potato in pan, top with chicken', 'Cover and cook until done!'],
        tip: '마지막에 치즈를 올려 녹여먹으면 환상!',
        tipEn: 'Adding melted cheese at the end is amazing!',
        likes: 489, dislikes: 16
    },
    {
        name: '순두부찌개', nameEn: 'Soft Tofu Stew',
        image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?w=400&h=300&fit=crop',
        tag: '찌개', tagEn: 'Stew',
        description: '부드러운 순두부와 해물의 조화',
        descriptionEn: 'Silky soft tofu stew with seafood',
        ingredients: ['순두부 1봉', '바지락 100g', '새우 5마리', '계란 1개', '고춧가루 1큰술', '참기름'],
        ingredientsEn: ['1 pack soft tofu', '100g clams', '5 shrimp', '1 egg', '1 tbsp chili flakes', 'Sesame oil'],
        steps: ['뚝배기에 참기름을 두르고 고춧가루를 볶아요', '멸치육수를 넣고 끓여주세요', '바지락과 새우를 넣습니다', '순두부를 넣고 끓여주세요', '계란을 톡 깨서 넣으면 완성!'],
        stepsEn: ['Add sesame oil to clay pot and fry chili flakes', 'Add anchovy broth and boil', 'Add clams and shrimp', 'Add soft tofu and boil', 'Crack an egg on top and done!'],
        tip: '밥을 말아먹으면 든든한 한 끼가 돼요!',
        tipEn: 'Mix with rice for a hearty meal!',
        likes: 334, dislikes: 9
    },
    {
        name: '잡채', nameEn: 'Japchae',
        image: 'https://images.unsplash.com/photo-1648421704448-2f85e5df50cc?w=400&h=300&fit=crop',
        tag: '반찬', tagEn: 'Side',
        description: '당면과 채소를 볶아낸 명절 음식',
        descriptionEn: 'Stir-fried glass noodles with vegetables',
        ingredients: ['당면 200g', '시금치', '당근', '양파', '표고버섯', '소고기 100g', '간장 3큰술'],
        ingredientsEn: ['200g glass noodles', 'Spinach', 'Carrot', 'Onion', 'Shiitake mushrooms', '100g beef', '3 tbsp soy sauce'],
        steps: ['당면을 삶아서 준비해주세요', '채소들을 채썰어 각각 볶아줍니다', '소고기도 양념해서 볶아주세요', '당면에 간장, 설탕으로 간을 합니다', '모든 재료를 섞고 참기름을 넣어 버무리면 완성!'],
        stepsEn: ['Boil glass noodles and set aside', 'Julienne vegetables and stir-fry separately', 'Season and stir-fry beef', 'Season noodles with soy sauce and sugar', 'Mix all ingredients with sesame oil!'],
        tip: '식어도 맛있어서 도시락 반찬으로 최고예요!',
        tipEn: 'Tastes great cold, perfect for lunchboxes!',
        likes: 267, dislikes: 6
    },
    {
        name: '육개장', nameEn: 'Yukgaejang',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
        tag: '탕', tagEn: 'Soup',
        description: '얼큰하고 칼칼한 소고기 국물',
        descriptionEn: 'Spicy beef soup with vegetables',
        ingredients: ['소고기 양지 300g', '대파 2대', '고사리', '숙주', '고춧가루 3큰술', '다진 마늘 2큰술'],
        ingredientsEn: ['300g beef brisket', '2 green onions', 'Bracken fern', 'Bean sprouts', '3 tbsp chili flakes', '2 tbsp minced garlic'],
        steps: ['양지를 삶아서 육수를 만들어주세요', '고기는 결대로 찢어줍니다', '대파, 고사리, 숙주를 준비해주세요', '육수에 고춧가루, 마늘로 양념합니다', '재료를 넣고 푹 끓이면 완성!'],
        stepsEn: ['Boil brisket to make broth', 'Shred the meat along the grain', 'Prepare green onion, bracken, and bean sprouts', 'Season broth with chili flakes and garlic', 'Add ingredients and simmer well!'],
        tip: '밥을 말아먹으면 해장으로 최고!',
        tipEn: 'Mix with rice for the best hangover cure!',
        likes: 298, dislikes: 8
    }
];

// DOM Elements
const menuCard = document.getElementById('menu-card');
const prevCard = document.getElementById('prev-card');
const nextCard = document.getElementById('next-card');
const cardImage = menuCard.querySelector('.card-image');
const cardTag = menuCard.querySelector('.card-tag');
const cardName = menuCard.querySelector('.card-name');
const cardDescription = menuCard.querySelector('.card-description');
const btnSkip = document.getElementById('btn-skip');
const btnRecipe = document.getElementById('btn-recipe');
const modal = document.getElementById('recipe-modal');
const modalClose = document.getElementById('modal-close');
const recipeEmoji = document.getElementById('recipe-emoji');
const recipeTitle = document.getElementById('recipe-title');
const recipeTag = document.getElementById('recipe-tag');
const ingredientsList = document.getElementById('ingredients');
const stepsList = document.getElementById('steps');
const tipEl = document.getElementById('tip');
const likeCount = document.getElementById('like-count');
const dislikeCount = document.getElementById('dislike-count');
const btnLike = document.getElementById('btn-like');
const btnDislike = document.getElementById('btn-dislike');
const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');

let currentIndex = 0;
let startX = 0;
let currentX = 0;
let isDragging = false;
let skippedMenus = [];

// State
let currentLang = localStorage.getItem('lang') || 'ko';
let isDarkMode = localStorage.getItem('darkMode') === 'true';

// Initialize theme and language
function initSettings() {
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        document.querySelector('.theme-icon').textContent = '☀️';
    }
    document.querySelector('.lang-icon').textContent = currentLang === 'ko' ? 'EN' : '한';
    updateLanguage();
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode');
    document.querySelector('.theme-icon').textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', isDarkMode);
}

function toggleLanguage() {
    currentLang = currentLang === 'ko' ? 'en' : 'ko';
    document.querySelector('.lang-icon').textContent = currentLang === 'ko' ? 'EN' : '한';
    localStorage.setItem('lang', currentLang);
    updateLanguage();
    displayMenu(currentIndex);
}

function updateLanguage() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });
}

function getRatings(menuName) {
    const saved = localStorage.getItem(`rating_${menuName}`);
    if (saved) {
        return JSON.parse(saved);
    }
    const menu = koreanMenus.find(m => m.name === menuName);
    return { likes: menu.likes, dislikes: menu.dislikes, voted: null };
}

function saveRating(menuName, type) {
    const ratings = getRatings(menuName);
    if (ratings.voted) return;

    if (type === 'like') {
        ratings.likes++;
    } else {
        ratings.dislikes++;
    }
    ratings.voted = type;
    localStorage.setItem(`rating_${menuName}`, JSON.stringify(ratings));
    updateRatingDisplay(menuName);
}

function updateRatingDisplay(menuName) {
    const ratings = getRatings(menuName);
    likeCount.textContent = ratings.likes;
    dislikeCount.textContent = ratings.dislikes;

    btnLike.disabled = !!ratings.voted;
    btnDislike.disabled = !!ratings.voted;

    btnLike.classList.toggle('voted', ratings.voted === 'like');
    btnDislike.classList.toggle('voted', ratings.voted === 'dislike');
}

function displayCardContent(cardEl, menu) {
    if (!menu) return;
    const img = cardEl.querySelector('.card-image');
    const tag = cardEl.querySelector('.card-tag');
    const name = cardEl.querySelector('.card-name');
    const desc = cardEl.querySelector('.card-description');

    img.style.backgroundImage = `url('${menu.image}')`;
    tag.textContent = currentLang === 'ko' ? menu.tag : menu.tagEn;
    name.textContent = currentLang === 'ko' ? menu.name : menu.nameEn;
    desc.textContent = currentLang === 'ko' ? menu.description : menu.descriptionEn;
}

function displayMenu(index) {
    const menu = koreanMenus[index % koreanMenus.length];
    const nextMenu = koreanMenus[(index + 1) % koreanMenus.length];

    // Display current card
    displayCardContent(menuCard, menu);
    menuCard.style.transform = '';
    menuCard.classList.remove('swipe-left', 'swipe-right');

    // Display next card (right side preview)
    displayCardContent(nextCard, nextMenu);

    // Display previous card (left side - last skipped menu)
    if (skippedMenus.length > 0) {
        const lastSkipped = skippedMenus[skippedMenus.length - 1];
        displayCardContent(prevCard, lastSkipped);
        prevCard.classList.add('visible');
    } else {
        prevCard.classList.remove('visible');
    }
}

function showRecipe() {
    const menu = koreanMenus[currentIndex % koreanMenus.length];
    recipeEmoji.style.backgroundImage = `url('${menu.image}')`;
    recipeTitle.textContent = currentLang === 'ko' ? menu.name : menu.nameEn;
    recipeTag.textContent = currentLang === 'ko' ? menu.tag : menu.tagEn;

    const ingredients = currentLang === 'ko' ? menu.ingredients : menu.ingredientsEn;
    const steps = currentLang === 'ko' ? menu.steps : menu.stepsEn;
    const tip = currentLang === 'ko' ? menu.tip : menu.tipEn;

    ingredientsList.innerHTML = ingredients.map(i => `<li>${i}</li>`).join('');
    stepsList.innerHTML = steps.map(s => `<li>${s}</li>`).join('');
    tipEl.textContent = tip;

    updateRatingDisplay(menu.name);
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}

function nextMenu() {
    // Save current menu as skipped
    const currentMenu = koreanMenus[currentIndex % koreanMenus.length];
    skippedMenus.push(currentMenu);
    if (skippedMenus.length > 10) {
        skippedMenus.shift(); // Keep only last 10
    }

    menuCard.classList.add('swipe-left');
    setTimeout(() => {
        currentIndex++;
        displayMenu(currentIndex);
    }, 400);
}

function handleSwipe(direction) {
    if (direction === 'left') {
        nextMenu();
    } else if (direction === 'right') {
        menuCard.classList.add('swipe-right');
        setTimeout(() => {
            showRecipe();
            menuCard.classList.remove('swipe-right');
        }, 400);
    }
}

// Touch events
menuCard.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    currentX = startX; // Initialize currentX to prevent stale value bug
    isDragging = true;
    menuCard.classList.add('swiping');
});

menuCard.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diffX = currentX - startX;
    const rotation = diffX * 0.1;
    menuCard.style.transform = `translateX(${diffX}px) rotate(${rotation}deg)`;
});

menuCard.addEventListener('touchend', () => {
    isDragging = false;
    menuCard.classList.remove('swiping');
    const diffX = currentX - startX;

    if (diffX < -100) {
        handleSwipe('left');
    } else if (diffX > 100) {
        handleSwipe('right');
    } else {
        menuCard.style.transform = '';
    }
    startX = 0;
    currentX = 0;
});

// Mouse events
menuCard.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    currentX = startX; // Initialize currentX to prevent stale value bug
    isDragging = true;
    menuCard.classList.add('swiping');
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    const diffX = currentX - startX;
    const rotation = diffX * 0.1;
    menuCard.style.transform = `translateX(${diffX}px) rotate(${rotation}deg)`;
});

document.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    menuCard.classList.remove('swiping');
    const diffX = currentX - startX;

    if (diffX < -100) {
        handleSwipe('left');
    } else if (diffX > 100) {
        handleSwipe('right');
    } else {
        menuCard.style.transform = '';
    }
    startX = 0;
    currentX = 0;
});

// Button events
btnSkip.addEventListener('click', nextMenu);
btnRecipe.addEventListener('click', showRecipe);
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

btnLike.addEventListener('click', () => {
    const menu = koreanMenus[currentIndex % koreanMenus.length];
    saveRating(menu.name, 'like');
});

btnDislike.addEventListener('click', () => {
    const menu = koreanMenus[currentIndex % koreanMenus.length];
    saveRating(menu.name, 'dislike');
});

themeToggle.addEventListener('click', toggleTheme);
langToggle.addEventListener('click', toggleLanguage);

// Initialize
initSettings();
displayMenu(currentIndex);
