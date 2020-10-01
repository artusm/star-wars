class Language < ActiveRecord::Base
    has_many :specie
    validates_uniqueness_of :name
end