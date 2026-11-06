CREATE TABLE app_users (
  id BIGSERIAL PRIMARY KEY,
  username VARCHAR(40) NOT NULL,
  username_normalized VARCHAR(40) NOT NULL UNIQUE,
  email VARCHAR(254) NOT NULL,
  email_normalized VARCHAR(254) NOT NULL UNIQUE,
  password_hash VARCHAR(100) NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT uq_app_users_username UNIQUE (username),
  CONSTRAINT uq_app_users_email UNIQUE (email)
);

CREATE TABLE species (
  id BIGSERIAL PRIMARY KEY,
  common_name VARCHAR(120) NOT NULL UNIQUE,
  category VARCHAR(40) NOT NULL,
  conservation_status VARCHAR(60) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  image_position VARCHAR(80),
  habitat TEXT,
  diet TEXT,
  behaviour TEXT
);

CREATE TABLE locations (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(120) NOT NULL UNIQUE,
  habitat TEXT NOT NULL,
  image_url TEXT NOT NULL,
  map_query TEXT NOT NULL
);

CREATE TABLE observations (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES app_users(id) ON DELETE CASCADE,
  species_id BIGINT NOT NULL REFERENCES species(id),
  location_id BIGINT NOT NULL REFERENCES locations(id),
  observed_at TIMESTAMP NOT NULL,
  individual_count INTEGER NOT NULL DEFAULT 1 CHECK (individual_count >= 1),
  notes TEXT NOT NULL DEFAULT '',
  sensitive_location BOOLEAN NOT NULL DEFAULT FALSE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX idx_observations_user_date ON observations(user_id, observed_at DESC);
CREATE INDEX idx_observations_species_date ON observations(species_id, observed_at DESC);
CREATE INDEX idx_observations_location_date ON observations(location_id, observed_at DESC);

INSERT INTO species(common_name, category, conservation_status, description, image_url, image_position, habitat, diet, behaviour) VALUES
('Asian Elephant','Mammal','Endangered','A social giant of forest edges, wetlands, and grasslands.','https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=900&q=80','center','Forests, grasslands and wetlands.','Herbivore','Social, highly intelligent, and matriarch-led.'),
('Bengal Tiger','Mammal','Endangered','A powerful apex predator that moves silently through dense cover.','https://images.unsplash.com/photo-1549480017-d76466a4b7e8?auto=format&fit=crop&w=900&q=80','center','Dense forest, grassland edges, and shaded water corridors.','Carnivore','Solitary, territorial, and most active around dawn and dusk.'),
('Indian Leopard','Mammal','Vulnerable','An adaptable spotted cat often seen near rocky forest corridors.','https://images.unsplash.com/photo-1544979590-37e9b47eb705?auto=format&fit=crop&w=900&q=80','center','Rocky forest, scrub edges, and broken canopy corridors.','Carnivore','Elusive and adaptable.'),
('Sambar Deer','Mammal','Vulnerable','A large forest deer with a deep alarm call and twilight habits.','https://images.unsplash.com/photo-1484406566174-9da000fda645?auto=format&fit=crop&w=900&q=80','center','Moist forest, lake margins, and shadowed clearings.','Herbivore','Alert and most active at dawn and dusk.'),
('Spotted Deer','Mammal','Least Concern','Graceful herds with white-flecked coats that shine in broken light.','https://upload.wikimedia.org/wikipedia/commons/a/a7/A_chital_stag_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original','center','Open forest and grassland edges.','Herbivore','Social and alert.'),
('Indian Gaur','Mammal','Vulnerable','A muscular wild bovine with pale stockings and a high ridgeback.','https://t3.ftcdn.net/jpg/03/88/25/88/360_F_388258874_nHzvnXwqV0EaJQb0vBbJzl5Eq393YrsC.jpg','center','Forest clearings and grasslands.','Herbivore','Moves in herds.'),
('Malabar Giant Squirrel','Mammal','Least Concern','A vivid canopy acrobat with rust, cream, and black fur.','https://images.unsplash.com/photo-1507666405895-422eee7d517f?auto=format&fit=crop&w=900&q=80','center','Evergreen forest canopy.','Omnivore','Arboreal and active by day.'),
('Indian Peafowl','Bird','Least Concern','A radiant bird known for courtship displays and ringing calls.','https://p2.piqsels.com/preview/271/444/951/peacock-bird-plumage-pheasant.jpg','center 35%','Forest edges and open scrub.','Omnivore','Ground-dwelling and social.'),
('Great Hornbill','Bird','Vulnerable','A huge forest bird with a golden casque and heavy wingbeats.','https://media.istockphoto.com/id/1356304155/photo/the-great-hornbill-also-known-as-the-concave-casqued-hornbill-great-indian-hornbill-or-great.jpg?s=612x612&w=0&k=20&c=8Fw2EZSOVp6fdEnp6JnExC_kTeWAkrXpHd154w47Uuo=','center','Mature tropical forest canopy.','Fruit and small animals','Usually seen in pairs or groups.'),
('King Cobra','Reptile','Vulnerable','A long, alert forest serpent and one of the world’s most iconic reptiles.','https://www.worldatlas.com/r/w768/upload/50/54/3a/shutterstock-2653816315-s3cdn.jpg','center 28%','Forest floor and stream corridors.','Carnivore','Elusive and defensive when threatened.')
ON CONFLICT (common_name) DO NOTHING;

INSERT INTO locations(name, habitat, image_url, map_query) VALUES
('Periyar','Lake forest and wet evergreen edges','https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1000&q=80','Periyar Tiger Reserve, Thekkady, Kerala, India'),
('Wayanad','Moist deciduous forest corridors','https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80','Wayanad Wildlife Sanctuary, Kerala, India'),
('Silent Valley','Rainforest, streams, and canopy trails','https://images.unsplash.com/photo-1503435980610-a51f3ddfee50?auto=format&fit=crop&w=1000&q=80','Silent Valley National Park, Kerala, India'),
('Thattekad','Riparian bird habitat','https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1000&q=80','Thattekkad Bird Sanctuary, Kerala, India'),
('Eravikulam','High grassland and shola forest','https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1000&q=80','Eravikulam National Park, Kerala, India')
ON CONFLICT (name) DO NOTHING;
