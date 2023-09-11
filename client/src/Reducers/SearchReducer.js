import AllApi from "../AllApi";

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_DATA": {
      const name = action.payload.target.name;
      const value = action.payload.target.value;
      return {
        ...state,
        [name]: value,
      };
    }
    case "SEARCH_FILTER": {
      const text = state.text;
      console.log(text);
      if (
        text.toLowerCase().includes("phone") ||
        text.toLowerCase().includes("mobile")||
        text.toLowerCase().includes("phones") ||
        text.toLowerCase().includes("mobiles")||
        text.toLowerCase().includes("infinix") ||
          text.toLowerCase().includes("infinix mobile") ||
          text.toLowerCase()===("mi") ||
          text.toLowerCase().includes("redmi") ||
          text.toLowerCase().includes("xiomi")||
          text.toLowerCase().includes("mi mobile") ||
          text.toLowerCase().includes("redmi mobile") ||
          text.toLowerCase().includes("oppo") ||
          text.toLowerCase().includes("oppo mobile") ||
          text.toLowerCase().includes("realme") ||
          text.toLowerCase().includes("realme mobile") ||
          text.toLowerCase().includes("samsung") ||
          text.toLowerCase().includes("samsung mobile") 
      ) {
        if (
          text.toLowerCase().includes("infinix") ||
          text.toLowerCase().includes("infinix mobile") 
         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "infix";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("mi") ||
          text.toLowerCase().includes("redmi") ||
          text.toLowerCase().includes("xiomi")||
          text.toLowerCase().includes("mi mobile") ||
          text.toLowerCase().includes("redmi mobile") 

         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "mi";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("oppo") ||
          text.toLowerCase().includes("oppo mobile") 
          
         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "oppo";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("realme") ||
          text.toLowerCase().includes("realme mobile") 
          
         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "realme";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("samsung") ||
          text.toLowerCase().includes("samsung mobile") 
          
         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "samsung";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("vivo") ||
          text.toLowerCase().includes("vivo mobile") 
          
         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "vivo";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }

        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 2;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
          
        };
      }
      if (
        text.toLowerCase().includes("diary") ||
        text.toLowerCase().includes("milk") ||
        text.toLowerCase().includes("shake") ||
        text.toLowerCase().includes("lassi") ||
        text.toLowerCase().includes("detergent") ||
        text.toLowerCase().includes("powder") ||
        text.toLowerCase().includes("surfexcel") ||
        text.toLowerCase().includes("fruit") ||
        text.toLowerCase().includes("vegetable") ||
        text.toLowerCase().includes("sabji") ||
        text.toLowerCase().includes("kitchen") ||
        text.toLowerCase().includes("saman") ||
        text.toLowerCase().includes("tiffin") ||
        text.toLowerCase().includes("nuts") ||
        text.toLowerCase().includes("pacakingfood") ||
        text.toLowerCase().includes("food") ||
        text.toLowerCase().includes("muesli") ||
        text.toLowerCase().includes("packagefood") ||
        text.toLowerCase().includes("skin wash") ||
        text.toLowerCase().includes("body") ||
        text.toLowerCase()===("wash") ||
        text.toLowerCase().includes("cream") ||
        text.toLowerCase().includes("neem") ||
        text.toLowerCase().includes("tulsi") ||
        text.toLowerCase().includes("hand wash") ||
        text.toLowerCase().includes("snacks") ||
        text.toLowerCase().includes("sandwich ") ||
        text.toLowerCase().includes("bourbon") ||
        text.toLowerCase().includes("biscuits") ||
        text.toLowerCase().includes("biscuit") ||
        text.toLowerCase().includes("staples")
      ) {
        if (
          text.toLowerCase().includes("diary") ||
          text.toLowerCase().includes("milk") ||
          text.toLowerCase().includes("shake") ||
          text.toLowerCase().includes("lassi")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "diary";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("detergent") ||
          text.toLowerCase().includes("powder") ||
          text.toLowerCase().includes("surfexcel")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "detergent";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("fruit") ||
          text.toLowerCase().includes("vegetable") ||
          text.toLowerCase().includes("sabji")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "vegetables";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("kitchen") ||
          text.toLowerCase().includes("saman") ||
          text.toLowerCase().includes("tiffin")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "kitchen";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("nuts") ||
          text.toLowerCase().includes("pacakingfood") ||
          text.toLowerCase().includes("muesli") ||
          text.toLowerCase().includes("packagefood") ||
          text.toLowerCase().includes("food")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "packagefood";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("skin wash") ||
          text.toLowerCase().includes("body") ||
          text.toLowerCase()===("wash") ||
          text.toLowerCase().includes("cream") ||
          text.toLowerCase().includes("neem") ||
          text.toLowerCase().includes("tulsi") ||
          text.toLowerCase().includes("hand wash")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "personalhome";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("snacks") ||
          text.toLowerCase().includes("sandwich ") ||
          text.toLowerCase().includes("bourbon") ||
          text.toLowerCase().includes("biscuits") ||
          text.toLowerCase().includes("biscuit")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "snacks";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("dal") ||
          text.toLowerCase().includes("masoor") ||
          text.toLowerCase().includes("chunks") ||
          text.toLowerCase().includes("soya") ||
          text.toLowerCase().includes("urad") ||
          text.toLowerCase().includes("rajma")
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "snacks";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 1;
        });

        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }
      if (
        text.toLowerCase().includes("man shirt") ||
        text.toLowerCase().includes("casual shirt") ||
        text.toLowerCase().includes("shirt") ||
        text.toLowerCase().includes("shirts") ||
        text.toLowerCase()===("man casual")||
        text.toLowerCase()===("casual")||
        text.toLowerCase()===("formal") ||
        text.toLowerCase()===("formals") ||
        text.toLowerCase()===("formal shirt") ||
        text.toLowerCase().includes("man formal") ||
        text.toLowerCase().includes("jeans") ||
          text.toLowerCase().includes("man jeans") ||
          text.toLowerCase().includes("pant") ||
          text.toLowerCase().includes("man pants") ||
          text.toLowerCase().includes("mantshirt") ||
          text.toLowerCase().includes("tshirt") ||
          text.toLowerCase().includes("tshirts") ||
          text.toLowerCase().includes("mansuit") ||
          text.toLowerCase().includes("man suit") ||
          text.toLowerCase().includes("kotpant") ||
          text.toLowerCase().includes("man marriage")||
        text.toLowerCase()===("lower") ||
        text.toLowerCase().includes("suit") ||
        text.toLowerCase().includes("jeans") ||
        text.toLowerCase()===("top") ||
        text.toLowerCase().includes("party")||
        text.toLowerCase().includes("woman dress") ||
        text.toLowerCase().includes("dress woman") ||
        text.toLowerCase().includes("woman clothes") ||
        text.toLowerCase().includes("woman home")||
        text.toLowerCase().includes("girl dress")||
          text.toLowerCase().includes("girl clothes")||
          text.toLowerCase().includes("woman party") ||
          text.toLowerCase()===("womanparty") ||
          text.toLowerCase().includes("woman party clothes") ||
          text.toLowerCase()===("woman home")||
          text.toLowerCase().includes("girl party")||
          text.toLowerCase()===("woman sort") ||
          text.toLowerCase()===("sorts") ||
          text.toLowerCase().includes("sorts girl") ||
          text.toLowerCase().includes("girl sort")||
          text.toLowerCase()===("woman top") ||
          text.toLowerCase()===("girl top") ||
          text.toLowerCase()===("top") ||
          text.toLowerCase()===("winterwoman") ||
          text.toLowerCase()===("woman winter") ||
          text.toLowerCase()===("winter dress") ||
          text.toLowerCase()===("winter clothes")||
          text.toLowerCase()===("sort")||
          text.toLowerCase().includes("girl winter")||
          text.toLowerCase()===("party")||
          text.toLowerCase()===("man party")
      ) {

        if (
          text.toLowerCase()===("man shirt") ||
          text.toLowerCase()===("casual shirt") ||
          text.toLowerCase()===("shirt") ||
          text.toLowerCase()===("shirts") ||
          text.toLowerCase()===("man casual")||
          text.toLowerCase()===("casual")


          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "causaulman";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("formal") ||
          text.toLowerCase()===("formals") ||
          text.toLowerCase().includes("formal shirt") ||
          text.toLowerCase().includes("man formal shirt") 
     


          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "formalman";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }

        if (
          text.toLowerCase()===("jeans") ||
          text.toLowerCase().includes("man jeans") ||
          text.toLowerCase()===("pant") ||
          text.toLowerCase()===("man pants") 
          

     


          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "jeansman";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("mantshirt") ||
          text.toLowerCase().includes("tshirt") ||
          text.toLowerCase().includes("tshirts") 
          
          

     


          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "mantshirt";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("mansuit") ||
          text.toLowerCase().includes("man suit") ||
          text.toLowerCase()===("kotpant") ||
          text.toLowerCase()===("man marriage")||
          text.toLowerCase()===("suit")||
          text.toLowerCase()===("party")||
          text.toLowerCase()===("man party")


          
          

     


          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "mansuit";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }

        if (
          text.toLowerCase()===("woman dress") ||
          text.toLowerCase()===("dress woman") ||
          text.toLowerCase().includes("woman clothes") ||
          text.toLowerCase()===("woman home")||
          text.toLowerCase().includes("girl dress")||
          text.toLowerCase().includes("girl clothes")
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "womandress";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("woman party") ||
          text.toLowerCase()===("womanparty") ||
          text.toLowerCase().includes("woman party clothes") ||
          text.toLowerCase()===("woman home")||
          text.toLowerCase().includes("girl party")||
          text.toLowerCase().includes("party woman")
         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "womanparty";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("woman sort") ||
          text.toLowerCase()===("sorts") ||
          text.toLowerCase().includes("sorts girl") ||
         
          text.toLowerCase().includes("girl sort")||
          text.toLowerCase()===("sort")

         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "womansort";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("woman top") ||
          text.toLowerCase()===("girl top") ||
          text.toLowerCase()===("top") 
         
         
         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "womantop";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("winterwoman") ||
          text.toLowerCase()===("woman winter") ||
          text.toLowerCase()===("winter dress") ||
          text.toLowerCase()===("winter clothes")||
          text.toLowerCase().includes("girl winter")


         
         
         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "winterwoman";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 3;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }

      if (
        text.toLowerCase()===("laptop") ||
        text.toLowerCase().includes("laptops") ||
        text.toLowerCase()===("camera") ||
        text.toLowerCase().includes("dslr") ||
        text.toLowerCase()===("cameras") ||
        text.toLowerCase()===("laptop bag") ||
          text.toLowerCase()===("laptopbag")||
          text.toLowerCase()===("bag for laptop")||
          text.toLowerCase()===("monitor") ||
          text.toLowerCase()===("lcd")||
          text.toLowerCase().includes("mouse") ||
          text.toLowerCase().includes("speaker") ||
          text.toLowerCase().includes("speakers")||
          text.toLowerCase().includes("sound")||
          text.toLowerCase().includes("boat speaker")||
          text.toLowerCase().includes("boat")||
          text.toLowerCase()===("computer")||
          text.toLowerCase()===("led")
      ) {
        if (
          text.toLowerCase()===("laptop") ||
          text.toLowerCase().includes("laptops") 
         


         
         
         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category ==="laptop";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("camera") ||
          text.toLowerCase().includes("dslr") ||
          text.toLowerCase()===("cameras") 
         


         
         
         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "camera";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("laptop bag") ||
          text.toLowerCase()===("laptopbag")||
          text.toLowerCase()===("bag for laptop")


          
         


         
         
         
          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "laptopbag";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }

        if (
          text.toLowerCase()===("monitor") ||
          text.toLowerCase()===("lcd")||
          text.toLowerCase()===("computer")||
          text.toLowerCase()===("led")


                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "monitor";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("mouse") 
         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "mouse";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("speaker") ||
          text.toLowerCase().includes("speakers")||
          text.toLowerCase().includes("sound")||
          text.toLowerCase().includes("boat speaker")||
          text.toLowerCase().includes("boat")


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "speaker";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 4;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }
      if (
        text.toLowerCase()===("bed") ||
          text.toLowerCase()===("beds")||
          text.toLowerCase()===("bad") ||
        text.toLowerCase().includes("bartan") ||
        text.toLowerCase().includes("steel")||
        text.toLowerCase().includes("dinner set")||
        text.toLowerCase()===("set")||
        text.toLowerCase()===("bedsheet") ||
        text.toLowerCase().includes("sheet")||
        text.toLowerCase().includes("clock") ||
          text.toLowerCase().includes("time")||
          text.toLowerCase().includes("watch")||
          text.toLowerCase().includes("watches")||
          text.toLowerCase().includes("lamp") ||
          text.toLowerCase().includes("roshni")||
          text.toLowerCase().includes("bulb")||
          text.toLowerCase()===("tourch") ||
          text.toLowerCase()===("battery")||
          text.toLowerCase().includes("cfl")||
          text.toLowerCase().includes("tubelight")||
          text.toLowerCase().includes("security") ||
          text.toLowerCase()===("security camera")||
          text.toLowerCase().includes("tool") ||
          text.toLowerCase()===("tools")||
          text.toLowerCase()===("pilas")||
          text.toLowerCase()===("light")||
          text.toLowerCase()===("screw")||
          text.toLowerCase().includes("screw driver")


      ) {
        if (
          text.toLowerCase().includes("bartan") ||
          text.toLowerCase().includes("steel")||
          text.toLowerCase().includes("dinner set")||
          text.toLowerCase()===("set")
      


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "bartan";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("bed") ||
          text.toLowerCase()===("beds")||
          text.toLowerCase()===("bad") 
         


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "bed";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("bedsheet") ||
          text.toLowerCase().includes("sheet")
         
         


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "bedsheet";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("clock") ||
          text.toLowerCase().includes("time")||
          text.toLowerCase().includes("watch")||
          text.toLowerCase().includes("watches")


         
         


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "clock";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("lamp") ||
          text.toLowerCase().includes("roshni")||
          text.toLowerCase().includes("bulb")

         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "lamp";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase()===("tourch") ||
          text.toLowerCase()===("battery")||
          text.toLowerCase().includes("cfl")||
          text.toLowerCase().includes("tubelight")||
          text.toLowerCase()===("light")


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "light";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("security") ||
          text.toLowerCase()===("security camera")
         


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "security camera";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("tool") ||
          text.toLowerCase()===("tools")||
          text.toLowerCase()===("pilas")||
          text.toLowerCase()===("screw")||
          text.toLowerCase().includes("screw driver")

         


         
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "tool";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }


        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 5;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }
      if (
        text.toLowerCase()===("ac") ||
          text.toLowerCase()===("air conditioner")||
          text.toLowerCase()===("air condition")||
          text.toLowerCase().includes("home appliances") ||
          text.toLowerCase()===("appliance")||
          text.toLowerCase()===("appliances")||
          text.toLowerCase().includes("microwave") ||
          text.toLowerCase().includes("oven")||
          text.toLowerCase().includes("rafigrator") ||
          text.toLowerCase().includes("freez")||
          text.toLowerCase().includes("freezer")||
          text.toLowerCase().includes("tv") ||
          text.toLowerCase().includes("television")||
          text.toLowerCase()===("washing machine") ||
          text.toLowerCase().includes("machine")
      ) {

        if (
          text.toLowerCase()===("ac") ||
          text.toLowerCase()===("air conditioner")||
          text.toLowerCase()===("air condition")
          
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "ac";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("home appliances") ||
          text.toLowerCase()===("appliance")||
          text.toLowerCase()===("appliances")
          
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "home appliances";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("microwave") ||
          text.toLowerCase().includes("oven")
          
          
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category ==="microwave";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("rafigrator") ||
          text.toLowerCase().includes("freez")||
          text.toLowerCase().includes("freezer")

          
          
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "rafigrator";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("tv") ||
          text.toLowerCase().includes("television")
          

          
          
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "tv";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("washing machine") ||
          text.toLowerCase().includes("machine")
          

          
          
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "washing Machine";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 6;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }
      if (
        text.toLowerCase().includes("baby toys") ||
          text.toLowerCase().includes("baby toy")||
        text.toLowerCase()===("baby") ||
        text.toLowerCase().includes("board") ||
        text.toLowerCase().includes("board game") ||
        text.toLowerCase().includes("gift toy") ||
        text.toLowerCase().includes("gift toys") ||
        text.toLowerCase().includes("learning toys") ||
          text.toLowerCase().includes("learning") ||
          text.toLowerCase().includes("puzzle toys") ||
          text.toLowerCase().includes("puzzle") ||
          text.toLowerCase().includes("remote control") ||
          text.toLowerCase().includes("remote toy") ||
          text.toLowerCase().includes("remote toys") 
       
      ) {

        if (
          text.toLowerCase().includes("baby toys") ||
          text.toLowerCase().includes("baby toy")||
          text.toLowerCase()===("baby") 
           
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "baby toys";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("board") ||
        text.toLowerCase().includes("board game") 
          
           
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "board Game";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("gift toy") ||
          text.toLowerCase().includes("gift toys") 
        
          
           
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "gift toy";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("learning toys") ||
          text.toLowerCase().includes("learning") 
        
          
           
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "learning toys";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("puzzle toys") ||
          text.toLowerCase().includes("puzzle") 
        
          
           
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "puzzle";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("remote control") ||
          text.toLowerCase().includes("remote toy") ||
          text.toLowerCase().includes("remote toys") 

        
          
           
                    
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "remote control";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 7;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }
      if (
        text.toLowerCase()===("sports") ||
        text.toLowerCase().includes("football") ||
        text.toLowerCase().includes("basket") ||
        text.toLowerCase().includes("hockey") ||
        text.toLowerCase().includes("badminton")||
        text.toLowerCase().includes("chidi")||
        text.toLowerCase().includes("shuttle")||
        text.toLowerCase().includes("cricket") ||
        text.toLowerCase().includes("cycle") ||
          text.toLowerCase()===("bat")||
          text.toLowerCase()===("ball")||
          text.toLowerCase().includes("helmet")||
          text.toLowerCase().includes("dumbbell") ||
          text.toLowerCase()===("gym")||
          text.toLowerCase().includes("fitness") ||
          text.toLowerCase().includes("exercise ") ||
          text.toLowerCase().includes("tenis")||
          text.toLowerCase().includes("cycling") 
      ) {
        if (
          text.toLowerCase().includes("badminton") ||
          text.toLowerCase().includes("chidi")||
          text.toLowerCase().includes("shuttle")||
          text.toLowerCase().includes("tenis")


        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "badminton";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("cricket") ||
          text.toLowerCase()===("bat")||
          text.toLowerCase()===("ball")||
          text.toLowerCase().includes("helmet")



        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "cricket";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
        }
        if (
          text.toLowerCase().includes("cycle") ||
          text.toLowerCase().includes("cycling") 
          

        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "cycle";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase().includes("dumbbell") ||
          text.toLowerCase()===("gym")


          

        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "dumbbell";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase().includes("fitness") ||
          text.toLowerCase().includes("exercise ") 

        

        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "fitness";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase().includes("football") 
          

        

        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "football";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 8;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      }
      if (
        text.toLowerCase().includes("footwear") ||
        text.toLowerCase().includes("shoes") ||
        text.toLowerCase().includes("boot")||
        text.toLowerCase().includes("casual shoes") ||
        text.toLowerCase().includes("casual shoe")||
        text.toLowerCase().includes("formal shoes") ||
          text.toLowerCase().includes("formal shoe")||
          text.toLowerCase()===("sandal") ||
          text.toLowerCase()===("sleeper")||
          text.toLowerCase()===("man sleeper")||
          text.toLowerCase()===("sleeper man")||
          text.toLowerCase()===("man sandal")||
          text.toLowerCase()===("sandal man")||
          text.toLowerCase()===("slipper")||
          text.toLowerCase().includes("sports shoes")||
          text.toLowerCase().includes("sport shoes") ||
          text.toLowerCase()===("man slipper")||
          text.toLowerCase()===("slipper man")
        
      ) {
        if (
          text.toLowerCase().includes("casual shoes") ||
          text.toLowerCase().includes("casual shoe")

          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "casual shoes";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase().includes("formal shoes") ||
          text.toLowerCase().includes("formal shoe")

          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "formal shoes";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase()===("sandal")||
          text.toLowerCase()===("man sandal")||
          text.toLowerCase()===("sandal man")          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "sandal";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase()===("sleeper")||
          text.toLowerCase()===("man sleeper")||
          text.toLowerCase()===("sleeper man")||
          text.toLowerCase()===("slipper")||
          text.toLowerCase()===("man slipper")||
          text.toLowerCase()===("slipper man")


         

          
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category ==="sleeper";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }
        if (
          text.toLowerCase().includes("sports shoes")||
          text.toLowerCase().includes("sport shoes")         
        ) {
          const AllArray = AllApi.map((curr) => {
            const data = curr.array.map((current) => {
              const ElementData = current.filter((currData) => {
                return currData.category === "sports shoes";
              });
              return ElementData;
            });
            return data;
          });
          return {
            ...state,
            searchData: AllArray,
          };
          
        }

        const AllArray = AllApi.filter((curr) => {
          return Number(curr.itemid) === 9;
        });
        const data = [AllArray[0].array];
        return {
          ...state,
          searchData: data,
        };
      } else {
        console.log("else");
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.name.toLowerCase().includes(text);
            });
            return myData;
          });
          return data;
        });
        console.log(AllArray);
        return {
          ...state,
          searchData: AllArray,
        };
      }
    }

    case "SEARCHBY_NAME": {
      const value = action.payload;

      const data = state.searchData;
      if (value === "min-price") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return a.price - b.price;
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
        };
      }
      if (value === "max-price") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return b.price - a.price;
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
        };
      }
      if (value === "a-z") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return a.name.localeCompare(b.name);
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
        };
      }
      if (value === "z-a") {
        const myData = data.map((curr) => {
          const ElementData = curr.map((current) => {
            const itemData = current.sort((a, b) => {
              return b.name.localeCompare(a.name);
            });
            return itemData;
          });
          return ElementData;
        });

        return {
          ...state,
          searchData: myData,
        };
      }
    }

    case "MOBLIE_FILTER": {
      const value = action.payload;
      if (value === "mi") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "mi";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "vivo") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "vivo";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "infix") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "infix";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "oppo") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "oppo";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "realme") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "realme";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "samsung") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "samsung";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "camera") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "camera";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "laptop") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "laptop";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "monitor") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "monitor";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "speaker") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "speaker";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "causaulman") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "causaulman";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "formalman") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "formalman";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "mantshirt") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "mantshirt";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "mansuit") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "mansuit";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "womandress") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "womandress";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "womanparty") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "womanparty";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "womansort") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "womansort";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "winterwoman") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "winterwoman";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "womantop") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "womantop";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "casual shoes") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "casual shoes";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "formal shoes") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "formal shoes";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "sandal") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "sandal";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "sports shoes") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "sports shoes";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "boot women") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "boot women";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "casual women") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "casual women";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "heel") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "heel";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "sleeper women") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "sleeper women";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "ac") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "ac";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "home appliances") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "home appliances";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "microwave") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "microwave";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "rafigrator") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "rafigrator";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "tv") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "tv";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "washing Machine") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "washing Machine";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "diary") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "diary";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "detergent") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "detergent";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "vegetables") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "vegetables";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }

      if (value === "kitchen") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "kitchen";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "packagefood") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "packagefood";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
      if (value === "personalhome") {
        const AllArray = AllApi.map((curr) => {
          const data = curr.array.map((currData) => {
            const myData = currData.filter((current) => {
              return current.category === "personalhome";
            });
            return myData;
          });
          return data;
        });
        return {
          ...state,
          searchData: AllArray,
        };
      }
    }
  }
  return state;
};

export default SearchReducer;
