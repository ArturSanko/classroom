Feature: Check all shopping card images on the web site

    Scenario: Check all shopping card images

        Given I navigate to 'urls'.'shop'
        When I click 'Books' element
        Then I check shopping card item images:
            """
            {
                "dataCards": [
                    {
                        "src": "//automationteststore.com/image/thumbnails/18/76/papertowns2_jpg-100201-250x250.jpg",
                        "width": "250",
                        "height": "250"
                    },
                    {
                        "src": "//automationteststore.com/image/thumbnails/18/76/paperback1_jpg-100198-250x250.jpg",
                        "width": "250",
                        "height": "250"
                    },
                    {
                        "src": "//automationteststore.com/image/thumbnails/18/76/paper_cover_allegiant_jpg-100203-250x250.jpg",
                        "width": "250",
                        "height": "250"
                    },
                    {
                        "src": "//automationteststore.com/image/thumbnails/18/76/audiocd1_jpg-100195-250x250.jpg",
                        "width": "250",
                        "height": "250"
                    }
                ]
            }
            """